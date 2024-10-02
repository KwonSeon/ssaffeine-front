import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/provider/Provider';

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
