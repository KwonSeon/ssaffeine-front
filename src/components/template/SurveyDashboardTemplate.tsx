'use client';
import {
  Button,
  Chip,
  Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useState } from 'react';
import AchievementChips from '../molecules/AchievementChips';
import GroupTabs from '../molecules/GroupTabs';
import StatusTabs from '../molecules/StatusTabs';
import WeekdayTabs from '../molecules/WeekdayTabs';

export default function SurveyDashboardTemplate() {
  const [selectedKey, setSelectedKey] = useState<Selection>(new Set([]));

  const achievement = [
    { day: 1, achievement: 24 },
    { day: 2, achievement: 16 },
    { day: 3, achievement: 16 },
    { day: 4, achievement: 16 },
    { day: 5, achievement: 16 },
  ];

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
      <Table
        aria-label='Example static collection table'
        fullWidth
        isHeaderSticky
        selectionMode='multiple'
        selectedKeys={selectedKey}
        onSelectionChange={setSelectedKey}
      >
        <TableHeader>
          <TableColumn>반</TableColumn>
          <TableColumn>이름</TableColumn>
          <TableColumn>금액</TableColumn>
          <TableColumn>입금시간</TableColumn>
          <TableColumn align='center'>상태</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='uuid-1'>
            <TableCell>1반</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Chip color='success'>결제전</Chip>
            </TableCell>
          </TableRow>
          <TableRow key='uuid-2'>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>
              <Chip color='success'>결제전</Chip>
            </TableCell>
          </TableRow>
          <TableRow key='uuid-3'>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Chip color='success'>결제전</Chip>
            </TableCell>
          </TableRow>
          <TableRow key='uuid-4'>
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
            <TableCell>Vacation</TableCell>
            <TableCell>
              <Chip color='success'>결제전</Chip>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
