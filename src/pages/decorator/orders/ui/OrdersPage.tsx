import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from '@mantine/core';
import { OrderList } from '@/shared/components/OrderList';
import { PriceList } from '@/shared/components/PriceList';
import { getOrders, getPrice } from '@/shared/store/slices/order/orderSlice';
import { RootState } from '@/shared/store/slices/profile/types';
import store from '@/shared/store/stores';

const OrdersPage = () => {
  const {
    order: {
      data: { orders },
      loading: orderLoading,
    },
    price,
  } = useSelector((state: RootState) => state.order);

  const isPrice = price.counter.length > 0;

  const {
    userList: { data: userList },
    userData: {
      data: { role, login },
    },
  } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (!isPrice) {
      store.dispatch(getPrice());
    }
  }, [price]);

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

  const handleTabsSubmit = (value: string | null) => {
    store.dispatch(
      getOrders({
        status: value,
        login,
      })
    );
  };



  return (
    <>
      {isPrice && <PriceList data={price} role={role} />}
      <Card withBorder shadow="sm" radius="lg">
        <OrderList
          userList={userList}
          data={orders}
          role={role}
          login={login}
          handleTabsSubmit={handleTabsSubmit}
          load={orderLoading}
        />
      </Card>
    </>
  );
};

export default OrdersPage;
