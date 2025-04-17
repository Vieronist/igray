import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AppShell, Burger, Button, Flex, NavLink, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { pageUrl } from '@/app/providers/router/config/page-routes';
import {
  getAmount,
  getOrdersWs,
  resetOrderCount,
  resetPrice,
} from '@/shared/store/slices/order/orderSlice';
import { getMe, removeUser } from '@/shared/store/slices/profile/profileSlice';
import { RootState } from '@/shared/store/slices/profile/types';
import store from '@/shared/store/stores';

export const MainLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();

  const localLogin = localStorage.getItem('login');

  const { amount } = useSelector((state: RootState) => state.order);

  const {
    userData: {
      data: { login, role },
    },
  } = useSelector((state: RootState) => state.profile);

  const newOrders = amount?.update_others[0]?.update_orders[0].new;
  const workOrders = amount?.update_others[0]?.update_orders[1].work;
  const workOrdersData = amount?.update_others[0]?.description;

  const isAdmin = role === 'admin';
  const isWorker = role === 'manager' || isAdmin;
  const isDecorator = role === 'worker' || isAdmin;

  useEffect(() => {
    if (localLogin) {
      store.dispatch(getMe({ password: '', login: localLogin }));
      if (role) {
        if (role === 'worker') {
          navigate(pageUrl.decorator.orders());
          return;
        }
        if (role === 'manager') {
          navigate(pageUrl.manager.orders());
          return;
        }
        if (role === 'admin') {
          navigate(pageUrl.admin.createAccount());
        }
      }
    }
  }, [localLogin]);

  useEffect(() => {
    if (!amount) {
      store.dispatch(getAmount());
    }
  }, [amount]);

  useEffect(() => {
    const handleNotificationPermission = (data: unknown) => {
      if ('Notification' in window) {
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            new Notification('Новое сообщение', {
              body: JSON.stringify(data),
              icon: 'public/rocket.png',
            });
          }
        });
      }
    };

    function connect() {
      const ws = new WebSocket(`wss://igraicrm.tw1.ru/ws/${login}`);
      ws.onopen = function () {
        console.log('WebSocket connection established.');
      };
      ws.onmessage = function (e) {
        const data = JSON.parse(e.data);
        console.log(data);

        if (data.notification.length > 0) {
          handleNotificationPermission(data.notification[0].message);
        }
        if (data.update_others.length > 0 && data.update_others[0].update_counter) {
          store.dispatch(resetPrice(data.update_others[0].update_counter));
        }

        if (data.update_others.length > 0 && data.update_others[0].update_orders) {
          store.dispatch(resetOrderCount(data));
        }

        if (data.update_others.length > 0 && data.update_others[0].update_orders_list) {
          store.dispatch(getOrdersWs(data.update_others[0].update_orders_list));
        }
      };

      ws.onclose = function (e) {
        console.log('Socket is closed. Reconnect will be attempted in 4 second.', e.reason);
        setTimeout(() => {
          connect();
        }, 4000);
      };
      ws.onerror = function (err) {
        console.error(`Socket error: ${err}`, 'Closing socket');
        ws.close();
      };
    }
    if (login) {
      connect();
    }
  }, [login]);

  const handleButtonSubmit = async () => {
    store.dispatch(removeUser());
    navigate(pageUrl.public.login());
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header
        px="md"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Flex align="center" gap="md">
          <img width={150} src="/logo.png" alt="logo" />

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Flex>

        {login && (
          <Text c="gray" ml="auto" mr={20}>
            {login}
          </Text>
        )}
        <Button radius="md" onClick={handleButtonSubmit}>
          Выйти
        </Button>
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        <Flex gap="xl" direction="column" mb={20}>
          {isAdmin && (
            <Flex gap="sm" direction="column">
              <Text c="dimmed">Админ</Text>

              <NavLink
                onClick={() => {
                  toggle();
                  navigate(pageUrl.admin.createAccount());
                }}
                active={location.pathname === pageUrl.admin.createAccount()}
                label="Создать аккаунт"
              />
            </Flex>
          )}

          {isWorker && (
            <Flex gap="sm" direction="column">
              <Text c="dimmed">Менеджер</Text>

              <NavLink
                onClick={() => {
                  toggle();
                  navigate(pageUrl.manager.orders());
                }}
                active={location.pathname === pageUrl.manager.orders()}
                label="Заказы"
              />
            </Flex>
          )}
          {isDecorator && (
            <Flex gap="sm" direction="column">
              <Text c="dimmed">Оформитель</Text>
              <NavLink
                onClick={() => {
                  toggle();
                  navigate(pageUrl.decorator.orders());
                }}
                active={location.pathname === pageUrl.decorator.orders()}
                label="Заказы"
              />
            </Flex>
          )}
        </Flex>
        <Flex gap="sm" direction="column" mb={20}>
          <Text c="dimmed">Steam</Text>
          <NavLink
            onClick={() => {
              toggle();
              navigate(pageUrl.steam.refill());
            }}
            active={location.pathname === pageUrl.steam.refill()}
            label="Пополнение"
          />
        </Flex>
        <Text
          size="lg"
          fw={900}
          variant="gradient"
          gradient={{ from: 'green', to: 'cyan', deg: 271 }}
          mb={20}
        >
          Новых заказов: {newOrders}
        </Text>
        <Text
          size="lg"
          fw={900}
          mb={20}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'green', deg: 24 }}
        >
          В работе: {workOrders}
        </Text>
        <Text
          size="lg"
          fw={900}
          mb={20}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'red', deg: 24 }}
        >
          Заказов в работе:
        </Text>
        {workOrdersData &&
          workOrdersData?.length > 0 &&
          workOrdersData.map((el, i) => (
            <Text key={i} size="l" fw={900}>
              {Object.entries(el).map(([key, value]) => (
                <div key={key}>
                  <strong>{key}:</strong>{' '}
                  {typeof value === 'string' || typeof value === 'number'
                    ? value
                    : JSON.stringify(value)}
                </div>
              ))}
            </Text>
          ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <div style={{ maxWidth: '1590px' }}>
          <Outlet />
        </div>
      </AppShell.Main>
    </AppShell>
  );
};
