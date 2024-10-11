'use client';
import {
  Button,
  Chip,
  Spacer,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tabs,
} from '@nextui-org/react';

export default function SurveyDashboardTemplate() {
  return (
    <>
      <Tabs aria-label='Days' color='primary'>
        <Tab key='0' title='전체' />
        <Tab key='1' title='월' />
        <Tab key='2' title='화' />
        <Tab key='3' title='수' />
        <Tab key='4' title='목' />
        <Tab key='5' title='금' />
      </Tabs>
      <Spacer y={2} />
      <Tabs aria-label='Group' color='secondary'>
        <Tab key='0' title='전체' />
        <Tab key='1' title='1반' />
        <Tab key='2' title='2반' />
        <Tab key='3' title='3반' />
        <Tab key='4' title='4반' />
      </Tabs>
      <Spacer y={2} />
      <Tabs aria-label='Status' color='success'>
        <Tab key='0' title='결제전' />
        <Tab key='1' title='결제완료' />
        <Tab key='2' title='수령완료' />
        <Tab key='3' title='3반' />
        <Tab key='4' title='4반' />
      </Tabs>
      <Spacer y={2} />
      <p>상태 변경</p>
      <Button color='primary'>결제 대기</Button>
      <Button color='primary'>주문 취소</Button>
      <Spacer y={2} />
      <Table aria-label='Example static collection table' fullWidth>
        <TableHeader>
          <TableColumn>반</TableColumn>
          <TableColumn>이름</TableColumn>
          <TableColumn>메뉴</TableColumn>
          <TableColumn>옵션</TableColumn>
          <TableColumn align='center'>상태</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>1반</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Chip color='success'>결제전</Chip>
            </TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>
              <Chip color='success'>결제전</Chip>
            </TableCell>
          </TableRow>
          <TableRow key='3'>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Chip color='success'>결제전</Chip>
            </TableCell>
          </TableRow>
          <TableRow key='4'>
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
