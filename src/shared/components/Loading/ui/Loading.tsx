import { Flex, Loader } from '@mantine/core';

export const Loading = () => {
  return (
    <Flex pos="relative" display="flex" justify="center" align="center" style={{ height: '300px' }}>
      <Loader size={50} color="gray" />
    </Flex>
  );
};
