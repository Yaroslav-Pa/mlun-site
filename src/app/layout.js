import { Inter } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Layout from '../components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Mlun - Art platform',
  description: 'Mlun',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
