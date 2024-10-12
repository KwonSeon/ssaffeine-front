import { Button, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <Card>
        <CardBody>
          <Link href='/admin/print/rerererer'>
            <Button size='lg' color='success' className='w-full'>
              2024.10.14 ~ 2024.10.18
            </Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
}
