import { SyntheticEvent, useRef, useState } from 'react';
import { IconBackspace, IconFileAlert, IconPlus, IconMinus } from '@tabler/icons-react';
import {
  Button,
  Card,
  ComboboxData,
  Flex,
  Select,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { ICreateOrderValues } from '@/shared/types';

const defaultInitialValues: ICreateOrderValues = {
  name_game: '',
  name_product: '',
  email: '',
  otp: '',
  comment: '',
  worker: 'public',
  payment_info: [[0, '$']],
};

export const CreateOrderForm = ({
  submit,
  loginList,
  values,
  closeCallback,
}: {
  submit: (values: ICreateOrderValues, files: File[]) => void;
  loginList: ComboboxData | undefined;
  values?: ICreateOrderValues;
  closeCallback?: () => void;
}) => {
  const initialValues = values || defaultInitialValues;
  const form = useForm({
    mode: 'controlled',
    initialValues,
    validate: {
      name_game: (value) => (value.length < 2 ? 'Введите логин' : null),
      name_product: (value) => (value.length < 1 ? 'Введите пароль' : null),
      email: (value) => (value.length < 1 ? 'Введите email' : null),
      payment_info: (value) => {
        const mainPrice = value[0][0];
        if (mainPrice === '') return null;
        const priceAsNumber = Number(mainPrice);
        return priceAsNumber <= 0 ? 'Цена не может быть меньше или равна 0' : null;
      },
    },
  });

  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [showAdditionalPrice, setShowAdditionalPrice] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleIconClick = () => {
    const current = fileInputRef.current;
    current && current.click();
  };

  const handleFormSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    form.onSubmit((values: ICreateOrderValues) => {
      const finalValues: ICreateOrderValues = {
        ...values,
        payment_info: values.payment_info.map(([price, currency]) => [
          price === '' ? 0 : Number(price),
          currency,
        ]),
      };
      submit(finalValues, selectedFiles);
    })();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
    }
  };

  const handleAddPriceField = () => {
    if (!showAdditionalPrice) {
      setShowAdditionalPrice(true);
      form.setFieldValue('payment_info', [...form.values.payment_info, [0, '$']]);
    }
  };

  const handleRemovePriceField = () => {
    setShowAdditionalPrice(false);
    form.setFieldValue('payment_info', [form.values.payment_info[0]]);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder p={20} maw={300} m="20 auto 20">
      <Flex justify="center">
        <form onSubmit={handleFormSubmit}>
          <TextInput
            label="Название игры"
            key={form.key('name_game')}
            {...form.getInputProps('name_game')}
          />
          <TextInput
            label="Название продукта"
            mt="sm"
            key={form.key('name_product')}
            {...form.getInputProps('name_product')}
          />
          <Flex direction="column" mt="sm">
            <Flex justify="space-between" align="center" gap={20}>
              <TextInput
                label="Цена"
                placeholder="Цена"
                type="number"
                w="50%"
                key={form.key('payment_info.0.0')}
                {...form.getInputProps('payment_info.0.0')}
                onChange={(event) => {
                  const value = event.currentTarget.value;
                  console.log('Main Price Changed:', value);
                  form.setFieldValue('payment_info.0.0', value === '' ? '' : Number(value));
                }}
              />
              <Flex align="center" gap={20}>
                <Select
                  label="Валюта"
                  mb="auto"
                  placeholder="валюта"
                  data={['$', '₴', '₺', '₴(б)', '₽']}
                  defaultValue="$"
                  value={form.values.payment_info[0][1]}
                  w="80px"
                  styles={{
                    wrapper: { width: '100%' },
                    input: { width: '100%', minWidth: 0 },
                  }}
                  onChange={(value) => {
                    if (value) {
                      console.log('Main Currency Changed:', value);
                      form.setFieldValue('payment_info.0.1', value);
                    }
                  }}
                />
                <ThemeIcon
                  mt={25}
                  style={{ cursor: 'pointer' }}
                  size="sm"
                  variant="dark"
                  color="gray.8"
                  onClick={showAdditionalPrice ? handleRemovePriceField : handleAddPriceField}
                >
                  {showAdditionalPrice ? (
                    <IconMinus size={16} color="white" />
                  ) : (
                    <IconPlus size={16} color="white" />
                  )}
                </ThemeIcon>
              </Flex>
            </Flex>
            {showAdditionalPrice && (
              <Flex justify="space-between" align="center" gap={20} mt="xs">
                <TextInput
                  label="Цена"
                  placeholder="Цена"
                  type="number"
                  w="50%"
                  key={form.key('payment_info.1.0')}
                  {...form.getInputProps('payment_info.1.0')}
                  onChange={(event) => {
                    const value = event.currentTarget.value;
                    console.log('Additional Price Changed:', value);
                    form.setFieldValue('payment_info.1.0', value === '' ? '' : Number(value));
                  }}
                />
                <Flex align="center" gap={20}>
                  <Select
                    label="Валюта"
                    placeholder="Валюта"
                    mb="auto"
                    data={['$', '₴', '₺', '₴(б)', '₽']}
                    defaultValue="$"
                    value={form.values.payment_info[1][1]}
                    w="80px"
                    styles={{
                      wrapper: { width: '100%' },
                      input: { width: '100%', minWidth: 0 },
                    }}
                    onChange={(value) => {
                      if (value) {
                        console.log('Additional Currency Changed:', value);
                        form.setFieldValue('payment_info.1.1', value);
                      }
                    }}
                  />
                  <ThemeIcon
                    mt={25}
                    size="sm"
                    variant="light"
                    color="transparent"
                  >
                    <IconMinus size={16} color="transparent" />
                  </ThemeIcon>
                </Flex>
              </Flex>
            )}
          </Flex>
          <Textarea
            resize="vertical"
            mt="sm"
            label="Email"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <TextInput mt="sm" label="Otp" key={form.key('otp')} {...form.getInputProps('otp')} />
          <Select
            mt="sm"
            label="Worker"
            data={loginList}
            searchable
            key={form.key('worker')}
            {...form.getInputProps('worker')}
            comboboxProps={{ shadow: 'md' }}
          />
          <Textarea
            mt="sm"
            placeholder="Комментарий"
            autosize
            key={form.key('comment')}
            {...form.getInputProps('comment')}
          />

          <Flex align="center" justify="center" gap={20}>
            {!values ? (
              <>
                <ThemeIcon
                  mt="sm"
                  style={{ cursor: 'pointer' }}
                  size="lg"
                  color="gray"
                  onClick={handleIconClick}
                >
                  <IconFileAlert />
                </ThemeIcon>
                <input
                  multiple
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileSelect}
                />
              </>
            ) : null}
            <Button type="submit" mt="sm">
              {!values ? 'Создать' : 'Редактировать'}
            </Button>
            {values && (
              <ThemeIcon mt="sm" style={{ cursor: 'pointer' }} size="lg" color="red">
                <IconBackspace style={{ cursor: 'pointer' }} onClick={closeCallback} />
              </ThemeIcon>
            )}
          </Flex>
          {!values && selectedFiles.length > 0 && (
            <Flex mt="sm" direction="column">
              Прикрепленные файлы:
              {selectedFiles.map((el) => (
                <Text key={el.lastModified} mt="sm" size="xs" c="gray">
                  {el.name}
                </Text>
              ))}
            </Flex>
          )}
        </form>
      </Flex>
    </Card>
  );
};