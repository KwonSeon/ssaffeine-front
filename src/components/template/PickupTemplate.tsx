'use client';

import { Button, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs } from '@nextui-org/react';

export default function PickupTemplate() {
  return (
    <>
      <div className='flex flex-wrap gap-4 mb-4'>
        <Tabs
          variant='underlined'
          color='primary'
          aria-label='Tabs variants'
          defaultSelectedKey={new Date(Date.now()).getDay()}
        >
          <Tab key='1' title='월' />
          <Tab key='2' title='화' />
          <Tab key='3' title='수' />
          <Tab key='4' title='목' />
          <Tab key='5' title='금' />
        </Tabs>
      </div>
      <Table aria-label='Example static collection table' fullWidth>
        <TableHeader>
          <TableColumn>음료 수령 여부</TableColumn>
          <TableColumn>반</TableColumn>
          <TableColumn>이름</TableColumn>
          <TableColumn>메뉴</TableColumn>
          <TableColumn>옵션</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>
              <Button>수령</Button>
            </TableCell>
            <TableCell>1반</TableCell>
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>
              <Button>수령</Button>
            </TableCell>
            <TableCell>2반</TableCell>
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
          </TableRow>
          <TableRow key='3'>
            <TableCell>
              <Button>수령</Button>
            </TableCell>
            <TableCell>3반</TableCell>
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow key='4'>
            <TableCell>
              <Button>수령</Button>
            </TableCell>
            <TableCell>4반</TableCell>
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
