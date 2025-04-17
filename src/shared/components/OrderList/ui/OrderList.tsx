import { useEffect, useState } from 'react';
import { ComboboxItem, Flex, Select, Skeleton, Tabs, Text } from '@mantine/core';
import { Order } from '@/shared/store/slices/order/types';
import { userData } from '@/shared/store/slices/profile/types';
import { OrderListItem } from './OrderListItem';

const STATUSES = [
  { value: 'new', text: 'Новые' },
  { value: 'work', text: 'В работе' },
  { value: 'done', text: 'Выполненные заказы' },
  { value: 'cancel', text: 'Отмененные' },
  { value: 'error', text: 'Ошибка' },
  { value: 'my', text: 'Мои заказы' },
];

export const OrderList = ({
  data,
  role,
  login,
  userList,
  handleTabsSubmit,
  load,
}: {
  data: Order[];
  role: string | null;
  login: string;
  userList: userData[];
  handleTabsSubmit: (value: string | null) => void;
  load: boolean;
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(STATUSES[0].value);
  const [value, setValue] = useState<ComboboxItem | null>(null);
  const [filteredOrders, setFilteredOrders] = useState(data);
  const currentData = data.filter((el) => (el.status ? el.status === activeTab : el));

  useEffect(() => {
    handleTabsSubmit(activeTab);
  }, [activeTab]);

  useEffect(() => {
    setFilteredOrders(currentData);
  }, [data]);

  useEffect(() => {
    setValue(null);
  }, [activeTab]);

  const handleSelectChange = (value: ComboboxItem) => {
    setValue(value);
    if (value) {
      const newFilteredOrders = currentData.filter((el) => el.worker === value.value || el.worker === "public");
      setFilteredOrders(newFilteredOrders);
    } else {
      setFilteredOrders(currentData);
    }
  };

  return (
    <>
      <Tabs onChange={(newTab) => setActiveTab(newTab)} color="gray" radius="sm" defaultValue="new">
        <Tabs.List grow mb={20}>
          {STATUSES.map((el, i) => (
            <Tabs.Tab key={`${el.value} - ${i}`} value={el.value}>
              <Text fs="xs">{el.text}</Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>
      {activeTab === 'work' && userList && (
        <Flex w={200}>
          <Select
            width={200}
            data={userList?.map((el) => el.login)}
            value={value ? value.value : null}
            onChange={(_value, option) => handleSelectChange(option)}
            mb={20}
            clearable
          />
        </Flex>
      )}

      {load ? (
        <>
          <Skeleton height={128} mt={6} />
          <Skeleton height={128} mt={6} />
          <Skeleton height={128} mt={6} />
        </>
      ) : (
        filteredOrders?.map((el, i) => (
          <OrderListItem
            key={`${el.name_game} - ${i}`}
            data={el}
            activeTab={activeTab}
            role={role}
            login={login}
          />
        ))
      )}
    </>
  );
};
