import Providers from '@/provider/Provider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ssafeine',
  description: 'ssafy puk 4th toy project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={``}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
