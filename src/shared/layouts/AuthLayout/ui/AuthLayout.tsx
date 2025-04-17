import { Outlet } from 'react-router-dom';
import { Center } from '@mantine/core';

export const AuthLayout = () => {
  return (
    <Center>
      <Outlet />
    </Center>
  );
};
