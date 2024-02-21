'use client';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Change } from '../../variablesToChange/index';
export type page = { url: string; pageName: string };
const { phones } = Change;

const pages: page[] = [
  {
    url: '/',
    pageName: 'Головна',
  },
  {
    url: '/AllServices',
    pageName: 'Перелік аналізів',
  },
  {
    url: './FAQ',
    pageName: 'Часті запитання',
  },
];

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header pages={pages} phones={phones} />
      {children}
      <Footer pages={pages} phones={phones} />
    </>
  );
}

export default Layout;
