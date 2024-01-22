import Link from 'next/link';
import Navigation from '../navigation/Navigation';

export type page = { url: string; pageName: string };

function Header() {
  const phone = '0213123113';
  const pages: page[] = [
    {
      url: './',
      pageName: 'Головна',
    },
    {
      url: './Questions',
      pageName: 'Часті питання',
    },
    {
      url: './Services',
      pageName: 'Усі послуги',
    },
  ];

  return (
    <>
      <header>
        <section className=" w-full min-h-[100px] bg-mainColor flex flex-row justify-around items-center">
          <Link href="./">
            {' '}
            <img src="./logo.png" alt="logo" className="max-h-[100px]" />{' '}
          </Link>
          <Navigation pages={pages}/>
          <div className="font-bold text-base">
            <p>{phone}</p>
            <p>{phone}</p>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
