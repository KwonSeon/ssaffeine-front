'use client';

import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import WeekdayTabs from '../molecules/WeekdayTabs';

export default function PickupTemplate() {
  const pickupData = [
    {
      key: '1',
      id: 'pickup-1',
      pickup: false,
      class: '1반',
      name: 'Tony Reichert',
      menu: 'CEO',
      option: 'Active',
    },
    {
      key: '2',
      id: 'pickup-2',
      pickup: false,
      class: '2반',
      name: 'Zoey Lang',
      menu: 'Technical Lead',
      option: 'Paused',
    },
    {
      key: '3',
      id: 'pickup-3',
      pickup: false,
      class: '3반',
      name: 'Jane Fisher',
      menu: 'Senior Developer',
      option: 'Active',
    },
    {
      key: '4',
      id: 'pickup-4',
      pickup: false,
      class: '4반',
      name: 'William Howard',
      menu: 'Community Manager',
      option: 'Vacation',
    },
  ];

  const columns = [
    { key: 'pickup', title: '음료 수령 여부' },
    { key: 'class', title: '반' },
    { key: 'name', title: '이름' },
    { key: 'menu', title: '메뉴' },
    { key: 'option', title: '옵션' },
  ];
  return (
    <>
      <div className='flex flex-wrap gap-4 mb-4'>
        <WeekdayTabs ariaLabel='PickupWeekdays' defaultSelectedKey={new Date(Date.now()).getDay()} />
      </div>
      <Table aria-label='Example static collection table' fullWidth>
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.title}</TableColumn>}
        </TableHeader>
        <TableBody items={pickupData}>
          {(item) => (
            <TableRow key={item.key}>{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
