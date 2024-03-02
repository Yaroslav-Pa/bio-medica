'use client';
import Footer from './footer/Footer';
import Header from './header/Header';

function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className='flex flex-col min-h-screen'>
      <Header />
      <div className='transition-all duration-300 flex-1'>{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
