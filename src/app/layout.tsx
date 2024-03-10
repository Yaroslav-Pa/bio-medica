import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Layout from '@/components/layout/Layout';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Bio Medica',
  description: 'Центр лабораторної медицини',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Suspense fallback={<div>Завантаження...</div>}>{children}</Suspense>
        </Layout>
      </body>
    </html>
  );
}
