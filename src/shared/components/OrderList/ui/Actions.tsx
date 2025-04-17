import { ChangeEvent, useRef, useState } from 'react';
import {
  IconCirclePlus,
  IconDownload,
  IconEdit,
  IconExclamationCircle,
  IconFileAlert,
  IconHttpDelete,
} from '@tabler/icons-react';
import { Button, Flex, Radio, RadioGroup, Text, ThemeIcon } from '@mantine/core';

export const Actions = ({
  activeTab,
  handleAcceptOrder,
  handleReportOrder,
  handleSendOrder,
  role,
  downloadUrl,
  isButtonVisible,
  handleEditOrder,
  handleDeleteOrder,
}: {
  activeTab: string | null;
  handleAcceptOrder: () => void;
  handleReportOrder: (value: string, file: File[] | null) => void;
  handleSendOrder: (file: File[] | null) => void;
  handleEditOrder: () => void;
  handleDeleteOrder: () => void;
  role: string | null;
  downloadUrl: () => void;
  isButtonVisible: boolean;
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[] | null>([]);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState<string>('');
  const [inputErrorValue, setInputErrorValue] = useState('');

  const handleIconClick = () => {
    const current = fileInputRef.current;
    current && current.click();
  };

  const handleError = () => {
    setError(false);
    handleReportOrder(errorValue ? errorValue : inputErrorValue, selectedFiles);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
    }
  };

  const handleSubmit = () => {
    handleSendOrder(selectedFiles);
  };

  const handleChangeErrorValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputErrorValue(e.currentTarget.value);
    setErrorValue('');
  };

  const handleToggleRadio = (value: string) => {
    setErrorValue(value);
    setInputErrorValue('');
  };

  return (
    <>
      <Flex align="center" gap={15} justify="center">
        {error && activeTab === 'work' && (role === 'admin' || role === 'worker') ? (
          <>
            <Flex gap={5} justify="center" direction="column">
              <RadioGroup value={errorValue} onChange={handleToggleRadio}>
                <Radio
                  mb={20}
                  value="Неверный логин или пароль"
                  label="Неверный логин или пароль"
                />
                <Radio
                  mb={20}
                  value="Есть подписка / неверная цена товара / невозможность оформить"
                  label="Есть подписка / неверная цена товара / невозможность оформить"
                />
                <Radio
                  mb={20}
                  value="Нужно привязать резервную почту"
                  label="Нужно привязать резервную почту"
                />
                <Radio mb={20} value="Неверный резервный код" label="Неверный резервный код" />
              </RadioGroup>
              <div>
                <input
                  placeholder="Текст ошибки"
                  onChange={handleChangeErrorValue}
                  type="text"
                  value={inputErrorValue}
                />
              </div>
              <input
                multiple
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileSelect}
              />

              <Flex direction="row" justify="center">
                <ThemeIcon
                  mr={20}
                  style={{ cursor: 'pointer' }}
                  size="lg"
                  color="gray"
                  onClick={handleIconClick}
                >
                  <IconFileAlert />
                </ThemeIcon>
                <Button size="sm" variant="filled" color="rgb(46, 171, 102)" onClick={handleError}>
                  Сообщить
                </Button>
              </Flex>
            </Flex>
          </>
        ) : (
          <>
            {activeTab === 'new' && (role === 'admin' || role === 'worker') ? (
              <ThemeIcon
                style={{ cursor: 'pointer' }}
                size="lg"
                color="green"
                onClick={handleAcceptOrder}
              >
                <IconCirclePlus />
              </ThemeIcon>
            ) : null}
            {activeTab === 'work' && (role === 'admin' || role === 'worker') ? (
              <>
                <Button size="sm" variant="filled" color="rgb(46, 171, 102)" onClick={handleSubmit}>
                  Отправить
                </Button>
                <ThemeIcon
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
                <ThemeIcon style={{ cursor: 'pointer' }} size="lg" color="red">
                  <IconExclamationCircle onClick={() => setError(true)} />
                </ThemeIcon>
              </>
            ) : null}

            {(activeTab === 'error' || activeTab === 'done') && isButtonVisible ? (
              <IconDownload style={{ cursor: 'pointer' }} color="gray" onClick={downloadUrl} />
            ) : null}
            {((role === 'admin' || role === 'manager') && activeTab === 'error') ||
            activeTab === 'work' || activeTab === "done" ? (
              <ThemeIcon style={{ cursor: 'pointer' }} size="lg" color="gray">
                <IconEdit style={{ cursor: 'pointer' }} onClick={handleEditOrder} />
              </ThemeIcon>
            ) : null}
            {role === 'admin' && (activeTab === 'work' || activeTab === 'done') ? (
              <ThemeIcon style={{ cursor: 'pointer' }} size="lg" color="red">
                <IconHttpDelete onClick={handleDeleteOrder} />
              </ThemeIcon>
            ) : null}
          </>
        )}
      </Flex>
      {selectedFiles && selectedFiles.length > 0 && (
        <Flex mt="sm" direction="column">
          Прикрепленные файлы:
          {selectedFiles.map((el) => (
            <Text key={el.lastModified} mt="sm" size="xs" c="gray">
              {el.name}
            </Text>
          ))}
        </Flex>
      )}
    </>
  );
};
