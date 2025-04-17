import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Flex, Text } from '@mantine/core';
import { CreateOrderForm } from '@/shared/components/Form/CreateOrderForm';
import { OrderList } from '@/shared/components/OrderList';
import { PriceList } from '@/shared/components/PriceList';
import { createOrder, getOrders, getPrice } from '@/shared/store/slices/order/orderSlice';
import { getUsers } from '@/shared/store/slices/profile/profileSlice';
import { RootState } from '@/shared/store/slices/profile/types';
import store from '@/shared/store/stores';
import { ICreateOrderValues } from '@/shared/types';
import { getLogin } from '../model/helpers';

const OrdersPage = () => {
  const [isForm, setIsForm] = useState(false);
  const { price } = useSelector((state: RootState) => state.order);
  const isPrice = price.counter.length > 0;
  const [tabs, setTabs] = useState<string | null>('new');

  const {
    userList: { data: userlist },
    userData: {
      data: { role, login },
    },
  } = useSelector((state: RootState) => state.profile);

  const {
    create,
    order: {
      loading: orderLoading,
      data: { orders },
    },
  } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    if (!userlist?.length) {
      store.dispatch(getUsers());
    }
  }, [userlist?.length]);

  useEffect(() => {
    const currentLogin = login || localStorage.getItem('login');
    if (!orders?.length) {
      store.dispatch(
        getOrders({
          status: 'new',
          login: currentLogin,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (!isPrice) {
      store.dispatch(getPrice());
    }
  }, [price]);

  const loginList = getLogin(userlist);

  const handleFormSubmit = async (values: ICreateOrderValues, files: File[]) => {
    try {
      const formData = new FormData();

      formData.append(
        'info',
        JSON.stringify({
          ...values,
          price: +values.price,
          creator: login,
        })
      );

      files.forEach((file) => {
        formData.append('files', file, file.name);
      });

      // console.log(formData)

      await store.dispatch(createOrder(formData));
      await store.dispatch(
        getOrders({
          status: tabs,
          login,
        })
      );

      setIsForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTabsSubmit = (value: string | null) => {
    store.dispatch(
      getOrders({
        status: value,
        login,
      })
    );
    setTabs(value);
  };

  return (
    <>
      {isPrice && <PriceList data={price} role={role} />}
      <Card withBorder shadow="sm" radius="lg" mb={20}>
        <Flex justify="space-between" align="center">
          {!create.error || !isForm ? (
            <Text size="s"> Создание заказа</Text>
          ) : (
            <Text c="red" size="s">
              Ошибка при создании заказа
            </Text>
          )}
          <Button
            color={!isForm ? 'rgb(46, 171, 102)' : 'red'}
            variant="filled"
            size="xs"
            onClick={() => setIsForm((p) => !p)}
          >
            {!isForm ? 'Создать заказ' : 'x'}
          </Button>
        </Flex>
        {isForm && <CreateOrderForm submit={handleFormSubmit} loginList={loginList} />}
      </Card>
      <Card withBorder shadow="sm" radius="lg">
        <OrderList
          userList={userlist}
          data={[...(orders.filter(el => el.worker === "public" || el.creator === login || role === "manager" || role === "admin") ) ]}
          role={role}
          handleTabsSubmit={handleTabsSubmit}
          login={login}
          load={orderLoading}
        />
      </Card>
    </>
  );
};

export default OrdersPage;
