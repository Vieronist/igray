import { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Flex, Table, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { RootState } from '@/shared/store/slices/profile/types';
import { getCurrency, getDeposit, getPrice } from '@/shared/store/slices/steam/steamSlice';
import store from '@/shared/store/stores';

const initialValue = { RUB: 0, KZT: 0, UAH: 0 };

const RefillPage = () => {
  const [currentPrice, setCurrentPrice] = useState(initialValue);
  const { data, deposit, error, success } = useSelector((state: RootState) => state.steam);

  const form = useForm({
    mode: 'controlled',
    initialValues: { login: '', amount: '' },
    validate: {
      login: (value) => (value.length < 2 ? 'Введите логин' : null),
    },
  });

  useEffect(() => {
    const amountValue = parseFloat(form.values.amount);
    if (!isNaN(amountValue) && data) {
      setCurrentPrice({
        RUB: amountValue * data.RUB,
        KZT: amountValue * data.KZT,
        UAH: amountValue * data.UAH,
      });
    } else {
      setCurrentPrice(initialValue);
    }
  }, [form.values.amount]);

  useEffect(() => {
    const fetchData = async () => {
      await store.dispatch(getCurrency());
    };
    if (!data) {
      fetchData();
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      await store.dispatch(getDeposit());
    };
    fetchData();
  }, []);

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    form.onSubmit(async (values) => {
      await store.dispatch(getPrice(values));
      await store.dispatch(getDeposit());
    })();
    setCurrentPrice(initialValue);
    form.values.login = '';
    form.values.amount = '';
  };

  return (
    <div>
      <Text size="l">Deposit: {deposit}</Text>

      <form onSubmit={handleFormSubmit}>
        <Flex direction="column" align="center" gap={20} maw={180} m="auto">
          <Text size="l">Steam Login</Text>
          <TextInput placeholder="Login" key={form.key('login')} {...form.getInputProps('login')} />
          <Text size="l">Amount</Text>
          <TextInput
            type="number"
            step={0.001}
            placeholder="Amount"
            key={form.key('amount')}
            {...form.getInputProps('amount')}
          />
          <Table striped withColumnBorders withTableBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Currency</Table.Th>
                <Table.Th>Amount</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>RUB</Table.Td>
                <Table.Td>{currentPrice.RUB.toFixed(2)}</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>KZT</Table.Td>
                <Table.Td>{currentPrice.KZT.toFixed(2)}</Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>UAH</Table.Td>
                <Table.Td>{currentPrice.UAH.toFixed(2)}</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
          <Button type="submit" color="green" radius="lg">
            BUY
          </Button>
          {error && (
            <Text size="l" c="red">
              Аккаунт не пополнен
            </Text>
          )}
          {success && (
            <Text size="l" c="green">
              Аккаунт успешно пополнен!
            </Text>
          )}
        </Flex>
      </form>
    </div>
  );
};

export default RefillPage;
