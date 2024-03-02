'use client';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Change } from '../../variablesToChange/index';
const { phones, pages } = Change;

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header pages={pages} phones={phones} />
      <div className='transition-all duration-300 flex-1'>{children}</div>
      <Footer pages={pages} phones={phones} />
    </main>
  );
}

export default Layout;
