import { SyntheticEvent } from 'react';
import { Button, Card, Center, Flex, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { roles, userData } from '@/shared/store/slices/profile/types';

export const CreateUserForm = ({ submit }: { submit: (values: userData) => void }) => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { login: '', password: '', role: 'admin' as roles },
    validate: {
      login: (value) => (value.length < 2 ? 'Введите логин' : null),
      password: (value) => (value.length < 1 ? 'Введите пароль' : null),
    },
  });

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    form.onSubmit((values: userData) => {
      submit(values);
    })();
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder p={20} maw={300} m="20 auto 0 ">
      <Flex justify="center">
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
          <Select
            label="Роль"
            placeholder="Роль пользователя"
            data={['admin', 'manager', 'worker']}
            defaultValue="admin"
            key={form.key('role')}
            {...form.getInputProps('role')}
          />
          <Center mt="md">
            <Button type="submit" mt="sm">
              Создать
            </Button>
          </Center>
        </form>
      </Flex>
    </Card>
  );
};
