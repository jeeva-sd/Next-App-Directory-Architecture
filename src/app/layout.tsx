import { memo } from 'react';
import { Inter } from 'next/font/google';
import { Providers } from '~/state/store/Provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next 13',
  description: 'Next 13 Architecture.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

export default memo(RootLayout);