import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Card, Flex, Skeleton, Text } from '@mantine/core';
import { CreateUserForm } from '@/shared/components/Form/CreateUserForm';
import { Loading } from '@/shared/components/Loading';
import { PriceList } from '@/shared/components/PriceList';
import { UsersList } from '@/shared/components/UsersList';
import { getPrice, resetPriceActions } from '@/shared/store/slices/order/orderSlice';
import { addUser, deleteUser, getUsers } from '@/shared/store/slices/profile/profileSlice';
import { RootState, userData } from '@/shared/store/slices/profile/types';
import store from '@/shared/store/stores';

const CreateAccountPage = () => {
  const [isForm, setIsForm] = useState(false);

  const {
    userList: { data: userListData, loading: userListLoading, error: userListError },
    createUser: { loading: createUserLoading, error: createUserError },
    userData: {
      data: { role },
    },
  } = useSelector((state: RootState) => state.profile);

  const { price } = useSelector((state: RootState) => state.order);

  const isPrice = price.counter.length > 0;

  useEffect(() => {
    if (!isPrice) {
      store.dispatch(getPrice());
    }
  }, [price]);

  useEffect(() => {
    if (!userListData.length) {
      store.dispatch(getUsers());
    }
  }, [userListData?.length]);

  const handleFormSubmit = async (values: userData) => {
    try {
      await store.dispatch(addUser(values));
      await store.dispatch(getUsers());
      setIsForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUser = async (login: string) => {
    await store.dispatch(deleteUser(login));
    await store.dispatch(getUsers());
  };

  const handleResetPrice = async () => {
    await store.dispatch(resetPriceActions());
    await store.dispatch(getPrice());
  };

  return (
    <>
      {isPrice && <PriceList data={price} role={role} handleClick={handleResetPrice} />}
      <Card withBorder shadow="sm" radius="lg" p={20} mb={20}>
        <Flex justify="space-between" align="center">
          {!createUserError || !isForm ? (
            <Text size="s"> Создание аккаунта</Text>
          ) : (
            <Text c="red" size="s">
              Ошибка при создании аккаунта
            </Text>
          )}
          <Button
            size="xs"
            variant="filled"
            color={!isForm ? 'rgb(46, 171, 102)' : 'red'}
            onClick={() => setIsForm((p) => !p)}
          >
            {!isForm ? 'Создать аккаунт' : 'x'}
          </Button>
        </Flex>
        {createUserLoading ? <Loading /> : isForm && <CreateUserForm submit={handleFormSubmit} />}
      </Card>
      {userListLoading ? (
        <>
          <Skeleton height={50} mt={16} />
          <Skeleton height={50} mt={16} />
          <Skeleton height={50} mt={16} />
        </>
      ) : userListData.length ? (
        <Card withBorder shadow="sm" radius="lg" p={20}>
          <Text size="m">Список юзеров</Text>
          <UsersList list={userListData} handleClick={handleDeleteUser} />
        </Card>
      ) : userListError ? (
        <Text size="m" c="red">
          Ошибка при получении списка юзеров
        </Text>
      ) : (
        <Text size="m" c="red">
          Аккаунты отсутствуют
        </Text>
      )}
    </>
  );
};

export default CreateAccountPage;
