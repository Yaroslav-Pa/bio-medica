'use client';
import Footer from './footer/Footer';
import Header from './header/Header';
import { Change } from '../../variablesToChange/index';
const { phones } = Change;

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header phones={phones} />
      <div className='transition-all duration-300 flex-1'>{children}</div>
      <Footer phones={phones} />
    </main>
  );
}

export default Layout;
