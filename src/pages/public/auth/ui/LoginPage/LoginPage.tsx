import { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Button, Card, Center, Flex, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { pageUrl } from '@/app/providers/router/config/page-routes';
import { auth, getMe } from '@/shared/store/slices/profile/profileSlice';
import { RootState } from '@/shared/store/slices/profile/types';
import store from '@/shared/store/stores';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { login: '', password: '' },
    validate: {
      login: (value) => (value.length < 2 ? 'Введите логин' : null),
      password: (value) => (value.length < 1 ? 'Введите пароль' : null),
    },
  });

  const {
    userData: {
      data: { role },
    },
  } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
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
  }, [role]);

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    form.onSubmit(async (values) => {
      try {
        await store.dispatch(auth(values));
        await store.dispatch(getMe(values));
      } catch (err) {
        setError(true);
      }
    })();
  };

  return (
    <Flex justify="center" className={styles.wrapper}>
      <Card className={styles.card} shadow="sm" padding="lg" radius="md" withBorder>
        <Flex justify="center" mb="lg">
          {!error ? (
            <Title order={2}>Авторизация</Title>
          ) : (
            <Title c="red" order={2}>
              Ошибка авторизации
            </Title>
          )}
        </Flex>

        <form onSubmit={handleFormSubmit}>
          <TextInput
            label="Логин"
            placeholder="Ваш логин"
            key={form.key('login')}
            {...form.getInputProps('login')}
          />

          <TextInput
            mt="sm"
            label="Пароль"
            placeholder="Ваш пароль"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />

          <Center mt="md">
            <Button type="submit" mt="sm">
              Войти
            </Button>
          </Center>
        </form>
      </Card>
    </Flex>
  );
};

export default LoginPage;
