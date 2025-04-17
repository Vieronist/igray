import { IconRefresh } from '@tabler/icons-react';
import { Flex, Text, ThemeIcon } from '@mantine/core';
import { price } from '@/shared/store/slices/order/types';
import { roles } from '@/shared/store/slices/profile/types';

export const PriceList = ({
  data,
  role,
  handleClick,
}: {
  data: price;
  role: roles | null;
  handleClick?: () => void;
}) => {
  return (
    <Flex mb={20} gap={20} justify="center" align="center">
      <Text>{data.counter[0]}</Text>
      <Text>{data.counter[1]}</Text>
      <Text>{data.counter[2]}</Text>
      <Text>{data.counter[3]}</Text>
      <Text>{data.counter[4]}</Text>
      <Text>{data.last_update}</Text>
      {role && role === 'admin' && (
        <ThemeIcon style={{ cursor: 'pointer' }} color="gray" onClick={handleClick}>
          <IconRefresh onClick={handleClick} />
        </ThemeIcon>
      )}
    </Flex>
  );
};
