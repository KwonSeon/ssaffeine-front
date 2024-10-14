'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';

export default function PickupButton() {
  const [isPickup, setIsPickup] = useState(false);

  return (
    <>
      {isPickup ? (
        <Button color='primary' onClick={() => setIsPickup(false)}>
          수령완료
        </Button>
      ) : (
        <Button color='default' onClick={() => setIsPickup(true)}>
          수령
        </Button>
      )}
    </>
  );
}
