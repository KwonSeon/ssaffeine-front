'use client';
import {
  Button,
  getKeyValue,
  Selection,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import GroupTabs from '../molecules/GroupTabs';
import StatusTabs from '../molecules/StatusTabs';
import WeekdayTabs from '../molecules/WeekdayTabs';

const AchievementChips = dynamic(() => import('../molecules/AchievementChips'));
const DynamicTable = dynamic(() => import('@nextui-org/react').then((mod) => mod.Table), { ssr: false });

export default function SurveyDashboardTemplate() {
  const [selectedKey, setSelectedKey] = useState<Selection>(new Set([]));

  const achievement = [
    { day: 1, achievement: 24 },
    { day: 2, achievement: 16 },
    { day: 3, achievement: 16 },
    { day: 4, achievement: 16 },
    { day: 5, achievement: 16 },
  ];

  const tableData = [
    { key: '1', class: '1반', name: 'Tony Reichert', amount: 'CEO', paymentTime: 'Active' },
    { key: '2', class: '2반', name: 'Technical Lead', amount: 'Paused', paymentTime: 'Paused' },
    { key: '3', class: '3반', name: 'Senior Developer', amount: 'Active', paymentTime: 'Active' },
    { key: '4', class: '4반', name: 'Community Manager', amount: 'Vacation', paymentTime: 'Vacation' },
  ];

  const columns = [
    { key: 'class', label: '반' },
    { key: 'name', label: '이름' },
    { key: 'amount', label: '금액' },
    { key: 'paymentTime', label: '입금시간' },
    { key: 'status', label: '상태' },
  ];

  useEffect(() => {
    console.log('selectedKey:', selectedKey);
  }, [selectedKey]);

  return (
    <>
      <div className='flex flex-col overflow-auto w-full'>
        <WeekdayTabs all ariaLabel='SurveyWeekdays' />
        <GroupTabs color='warning' ariaLabel='SurveyGroups' />

        <StatusTabs color='success' ariaLabel='SurveyStatus' />
        <p>상태 변경</p>
        <div className='flex'>
          <Button color='primary'>입금확인중</Button>
          <Button color='primary'>입금완료</Button>
          <Button color='primary'>주문취소</Button>
        </div>
        <AchievementChips achievement={achievement} color='warning' />
      </div>
      <DynamicTable
        aria-label='주문현황'
        fullWidth
        isHeaderSticky
        selectionMode='multiple'
        selectedKeys={selectedKey}
        onSelectionChange={setSelectedKey}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={tableData}>
          {(item) => (
            <TableRow key={item.key}>{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </DynamicTable>
    </>
  );
}
