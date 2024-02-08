import Link from 'next/link';
import { page } from '../Layout';
import PhoneList from '@/components/phonesList/PhoneList';

function Header({ pages, phones }: { pages: page[]; phones: string[] }) {
  return (
    <>
      <header className="drop-shadow-xl">
        <section className="w-full  py-[15px] bg-firstColor">
          <div className="max-w-containerWidth max-h-[50px] mx-[auto] flex flex-row justify-around items-center">
            <Link href="./" className="max-h-fit">
              <img
                src="./logo.png"
                alt="logo"
                className="max-h-[35px] sm:max-h-[50px]"
              />
            </Link>
            <div className="font-bold text-small md:text-base">
              <PhoneList phones={phones} />
            </div>
          </div>
        </section>
        <section className="max-h-20 md:max-h-20 text-small md:text-base flex flex-row justify-center items-center bg-secondColor">
          <nav className={'flex gap-5flex-row'}>
            {pages.map(({ url, pageName }) => (
              <div
                key={url}
                className="m-3 hover:cursor-pointer transition-colors duration-200 text-center p-2 hover:bg-thierdColor rounded-md"
              >
                <Link href={url}>{pageName}</Link>
              </div>
            ))}
          </nav>
        </section>
      </header>
    </>
  );
}

export default Header;
