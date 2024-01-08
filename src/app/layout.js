import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mlun - Art platform',
  description: 'Mlun',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
        {children}
      </body>
    </html>
  );
}
