'use client';

import { getKeyValue, Selection, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import SurveyOrderTableChip from '../atoms/SurveyOrderTableChip';
const DynamicTable = dynamic(() => import('@nextui-org/react').then((mod) => mod.Table), { ssr: false });

export default function SurveyOrderTable() {
  const [selectedKey, setSelectedKey] = useState<Selection>(new Set([]));

  const tableData = [
    {
      key: '1',
      semester: '교육프로',
      group: '1반',
      name: 'Tony Reichert',
      amount: 'CEO',
      paymentTime: 'Active',
      status: '입금확인중',
    },
    {
      key: '2',
      semester: '11기',
      group: '2반',
      name: 'Technical Lead',
      amount: 'Paused',
      paymentTime: 'Paused',
      status: '입금확인중',
    },
    {
      key: '3',
      semester: '12기',
      group: '3반',
      name: 'Senior Developer',
      amount: 'Active',
      paymentTime: 'Active',
      status: '입금확인중',
    },
    {
      key: '4',
      semester: '12기',
      group: '4반',
      name: 'Community Manager',
      amount: 'Vacation',
      paymentTime: 'Vacation',
      status: '입금확인중',
    },
  ];

  const columns = [
    { key: 'semester', label: '기수' },
    { key: 'group', label: '반' },
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
      <DynamicTable
        aria-label='주문현황'
        fullWidth
        isHeaderSticky
        selectionMode='multiple'
        selectedKeys={selectedKey}
        onSelectionChange={setSelectedKey}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} align={column.key === 'status' ? 'center' : 'start'}>
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={tableData}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === 'status' ? (
                    <SurveyOrderTableChip status={getKeyValue(item, columnKey)} />
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </DynamicTable>
    </>
  );
}
