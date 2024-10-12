'use client';
import { Button, Card, CardBody } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function OrdersPrintDate({
  date,
}: {
  date: {
    id: number;
    date: string;
  };
}) {
  const router = useRouter();
  return (
    <>
      <Card>
        <CardBody>
          <Button size='lg' color='success' className='w-full' onClick={() => router.push(`/admin/print/${date.id}`)}>
            {date.date}
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
