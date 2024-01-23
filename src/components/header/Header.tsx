import Link from 'next/link';
import Navigation from '../navigation/Navigation';

export type page = { url: string; pageName: string };

function Header() {
  const phone = '+38 (096) 555 12 11';
  const pages: page[] = [
    {
      url: './',
      pageName: 'Головна',
    },
    {
      url: './Services',
      pageName: 'Усі послуги',
    },
    {
      url: './Questions',
      pageName: 'Часті питання',
    },
  ];

  return (
    <>
      <header className="drop-shadow-xl">
        <section className="w-full  py-[15px] bg-mainColor">
          <div className="max-w-containerWidth max-h-[50px] mx-[auto] flex flex-row justify-around items-center">
            <Link href="./" className="max-h-fit">
              <img src="./logo.png" alt="logo" className="max-h-[35px] sm:max-h-[50px]" />
            </Link>
            <div className="font-bold text-small md:text-base">
              <p>{phone}</p>
              <p>{phone}</p>
            </div>
          </div>
        </section>
        <section className="max-h-20 md:max-h-20 text-small md:text-base flex flex-row justify-center items-center bg-white">
          <Navigation pages={pages} />
        </section>
      </header>
    </>
  );
}

export default Header;
