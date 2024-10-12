'use client';
import {
  Button,
  Chip,
  Selection,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from '@nextui-org/react';
import { useState } from 'react';

export default function SurveyDashboardTemplate() {
  const [selectedKey, setSelectedKey] = useState<Selection>(new Set([]));

  return (
    <>
      <div className='flex flex-col overflow-auto w-full'>
        <Tabs aria-label='Days' color='primary'>
          <Tab key='0' title='전체' />
          <Tab key='1' title='월' />
          <Tab key='2' title='화' />
          <Tab key='3' title='수' />
          <Tab key='4' title='목' />
          <Tab key='5' title='금' />
        </Tabs>
        <Tabs aria-label='Group' color='warning'>
          <Tab key='0' title='전체' />
          <Tab key='1' title='1반' />
          <Tab key='2' title='2반' />
          <Tab key='3' title='3반' />
          <Tab key='4' title='4반' />
        </Tabs>
        <Tabs aria-label='Status' color='success'>
          <Tab key='0' title='전체' />
          <Tab key='1' title='입금대기' />
          <Tab key='2' title='입금확인중' />
          <Tab key='3' title='입금완료' />
          <Tab key='4' title='수령완료' />
        </Tabs>
        <p>상태 변경</p>
        <div className='flex'>
          <Button color='primary'>입금확인중</Button>
          <Button color='primary'>입금완료</Button>
          <Button color='primary'>주문취소</Button>
        </div>
        <div className='flex'>
          <Chip startContent={<p className='pl-2'>월</p>} variant='shadow' color='warning'>
            16/20
          </Chip>
          <Chip startContent={<p className='pl-2'>화</p>} variant='bordered'>
            16/20
          </Chip>
          <Chip startContent={<p className='pl-2'>수</p>} variant='bordered'>
            16/20
          </Chip>
          <Chip startContent={<p className='pl-2'>목</p>} variant='bordered'>
            16/20
          </Chip>
          <Chip startContent={<p className='pl-2'>금</p>} variant='bordered'>
            16/20
          </Chip>
        </div>
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
