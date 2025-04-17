import { IconHttpDelete } from '@tabler/icons-react';
import { Table, ThemeIcon } from '@mantine/core';
import { userData } from '@/shared/store/slices/profile/types';

export const UsersList = ({
  list,
  handleClick,
}: {
  list: userData[];
  handleClick: (login: string) => void;
}) => {
  return (
    <Table verticalSpacing="md" highlightOnHover style={{ overflowX: 'auto' }}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Имя</Table.Th>
          <Table.Th>Пароль</Table.Th>
          <Table.Th>Роль</Table.Th>
          <Table.Th> </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {list.map((element, i) => (
          <Table.Tr key={`${element.password}${i}`}>
            <Table.Td>{element.login}</Table.Td>
            <Table.Td>{element.password}</Table.Td>
            <Table.Td>{element.role}</Table.Td>
            <Table.Td>
              <ThemeIcon
                style={{ cursor: 'pointer' }}
                size="lg"
                color="red"
                onClick={() => handleClick(element.login)}
              >
                <IconHttpDelete />
              </ThemeIcon>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
