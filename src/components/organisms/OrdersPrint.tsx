import OrdersPrintDate from '../molecules/OrdersPrintDate';

export default function OrdersPrint() {
  const data = [
    {
      id: 1,
      date: '2024.10.14 ~ 2024.10.18',
      status: 'completed',
    },
    {
      id: 2,
      date: '2024.10.21 ~ 2024.10.25',
      status: 'completed',
    },
    {
      id: 3,
      date: '2024.10.28 ~ 2024.11.01',
      status: 'completed',
    },
    {
      id: 4,
      date: '2024.11.04 ~ 2024.11.08',
      status: 'completed',
    },
    {
      id: 5,
      date: '2024.11.11 ~ 2024.11.15',
      status: 'completed',
    },
    {
      id: 6,
      date: '2024.11.18 ~ 2024.11.22',
      status: 'completed',
    },
    {
      id: 7,
      date: '2024.11.25 ~ 2024.11.29',
      status: 'completed',
    },
    {
      id: 8,
      date: '2024.12.02 ~ 2024.12.06',
      status: 'completed',
    },
    {
      id: 9,
      date: '2024.12.09 ~ 2024.12.13',
      status: 'completed',
    },
    {
      id: 10,
      date: '2024.12.16 ~ 2024.12.20',
      status: 'completed',
    },
    {
      id: 11,
      date: '2024.12.23 ~ 2024.12.27',
      status: 'completed',
    },
    {
      id: 12,
      date: '2024.12.30 ~ 2025.01.03',
      status: 'completed',
    },
  ];

  return (
    <>
      {data.map((date, index) => (
        <OrdersPrintDate key={index} date={date} />
      ))}
    </>
  );
}
