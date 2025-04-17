import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Card, Flex, Text } from '@mantine/core';
import {
  acceptOrder,
  createOrder,
  deleteOrder,
  editOrders,
  getImgOrder,
  getOrders,
  reportOrder,
  sendOrder,
} from '@/shared/store/slices/order/orderSlice';
import { Order } from '@/shared/store/slices/order/types';
import { getUsers } from '@/shared/store/slices/profile/profileSlice';
import { RootState } from '@/shared/store/slices/profile/types';
import store from '@/shared/store/stores';
import { ICreateOrderValues } from '@/shared/types';
import { getLogin } from '@/pages/manager/orders/model/helpers';
import { CreateOrderForm } from '../../Form/CreateOrderForm';
import { Actions } from './Actions';
import Gallery from './Gallerey';

export const OrderListItem = ({
  data,
  activeTab,
  role,
  login,
}: {
  data: Order;
  activeTab: string | null;
  role: string | null;
  login: string;
}) => {
  const {
    name_game,
    price,
    currency,
    name_product,
    otp,
    email,
    comment,
    date,
    id,
    timer,
    creator,
    worker,
  } = data;
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [downloadLink, setDownloadLink] = useState<string | null>(null);
  const [editOrder, setEditOrder] = useState(false);

  const formData: ICreateOrderValues = {
    name_game,
    name_product,
    email,
    otp,
    comment: comment || '',
    worker: 'public',
    payment_info: [[price, currency]],
  };

  const {
    userList: { data: userlist },
  } = useSelector((state: RootState) => state.profile);
  const loginList = getLogin(userlist);

  const handleAcceptOrder = async () => {
    await store.dispatch(acceptOrder({ order_id: id, login }));
    await store.dispatch(
      getOrders({
        status: 'new',
        login,
      })
    );
  };

  const handleReportOrder = async (error: string, files: File[] | null) => {
    const formData = new FormData();
    formData.append('order_id', id.toString());
    formData.append('error_type', error);
    files?.forEach((file) => {
      formData.append('files', file);
    });

    await store.dispatch(reportOrder(formData));
    await store.dispatch(
      getOrders({
        status: activeTab,
        login,
      })
    );
  };

  const handleSendOrder = async (file: File[] | null) => {
    const formData = {
      info: JSON.stringify({ order_id: id }),
      file,
    };
    await store.dispatch(sendOrder(formData));
    await store.dispatch(
      getOrders({
        status: activeTab,
        login,
      })
    );
  };

  const handleEditOrder = () => {
    setEditOrder(true);
  };

  const handleDownload = () => {
    if (downloadLink) {
      const link = document.createElement('a');
      link.href = downloadLink;
      link.download = `order_${id}.png`;
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(downloadLink);
    }
  };

  const handleDeleteOrder = async () => {
    await store.dispatch(deleteOrder({ order_id: data.id }));
    await store.dispatch(
      getOrders({
        status: activeTab,
        login,
      })
    );
  };

  const handleFormSubmit = async (values: ICreateOrderValues, files: File[]) => {
    try {
      if (activeTab === 'error') {
        const formData = new FormData();

        formData.append(
          'info',
          JSON.stringify({
            ...values,
            price: values.payment_info[0][0],
            order_id: data.id,
            creator: login,
          })
        );

        await store.dispatch(deleteOrder({ order_id: data.id }));
        await store.dispatch(createOrder(formData));
        await store.dispatch(
          getOrders({
            status: 'error',
            login,
          })
        );
      }
      if (activeTab === 'work' || activeTab === 'done') {
        await store.dispatch(editOrders(values));
        await store.dispatch(
          getOrders({
            status: activeTab,
            login,
          })
        );
      }

      setEditOrder(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (
      ((role === 'admin' || role === 'worker') && activeTab === 'done') ||
      activeTab === 'error'
    ) {
      const fetchImage = async () => {
        const response = await fetch('https://igraicrm.tw1.ru/orders/download', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            order_id: id,
          }),
        });

        if (!response.ok) {
          throw new Error('Не удалось получить картинку.');
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setDownloadLink(url);
        setIsButtonVisible(true);
      };

      fetchImage();
    }
  }, [role, activeTab, id]);
  const [currentImg, setCurrentImg] = useState<{ links: [] } | null>(null);

  useEffect(() => {
    if (data) {
      store.dispatch(getImgOrder({ order_id: id })).then((result) => {
        if (result.payload.links) {
          setCurrentImg(result.payload);
        }
      });
    }
  }, [data]);

  useEffect(() => {
    if (!userlist?.length) {
      store.dispatch(getUsers());
    }
  }, [userlist?.length]);

  const formattedEmail = email?.split('\n').map((item, index) => (
    <span key={index}>
      {item}
      <br />
    </span>
  ));

  if (!id) {
    return;
  }

  return !editOrder ? (
    <Card shadow="xl" mb={20}>
      <Card shadow="sl" padding={15} mb={role === 'admin' ? '20' : '0'}>
        <Flex align="center" justify="space-between">
          <Text>
            <span style={{ color: ' gray' }}>Creator:</span> {creator}
          </Text>
          <Text>
            <span style={{ color: ' gray' }}>ID:</span> {id}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text>
            <span style={{ color: ' gray' }}>Name:</span> {name_game}
          </Text>
          <Text>
            <span style={{ color: ' gray' }}>Price: </span> {price} {currency}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text>
            <span style={{ color: ' gray' }}>Product: </span> {name_product}
          </Text>
        </Flex>
        <Flex align="center" justify="space-between">
          <Text style={{ wordBreak: 'break-all', width: '100%' }}>
            <span style={{ color: 'gray' }}>Email:</span> {formattedEmail}
          </Text>
        </Flex>
        <Flex justify="space-between" direction="column">
          <Text>
            <span style={{ color: ' gray' }}>Otp: </span> {otp ? otp : ""}
          </Text>
          <Text>
            <span style={{ color: ' gray' }}>Comment:</span> {comment}
          </Text>
          <Text> {date}</Text>
        </Flex>
        {activeTab === 'done' ? (
          <Text>
            <span style={{ color: ' gray' }}>Выполнил:</span> {worker}
          </Text>
        ) : null}
        {timer && activeTab === 'done' ? (
          <Flex align="end" justify="end">
            <Text c="red">
              <span style={{ color: 'red' }}>Время на выполнение: </span> {timer}
            </Text>
          </Flex>
        ) : null}
      </Card>

      {currentImg && currentImg?.links.length > 0 ? <Gallery images={currentImg.links} /> : null}
      <Actions
        role={role}
        activeTab={activeTab}
        handleDeleteOrder={handleDeleteOrder}
        handleAcceptOrder={handleAcceptOrder}
        handleReportOrder={handleReportOrder}
        handleSendOrder={handleSendOrder}
        downloadUrl={handleDownload}
        handleEditOrder={handleEditOrder}
        isButtonVisible={isButtonVisible}
      />
    </Card>
  ) : (
    <CreateOrderForm
      loginList={loginList}
      submit={handleFormSubmit}
      values={formData}
      closeCallback={() => setEditOrder(false)}
    />
  );
};