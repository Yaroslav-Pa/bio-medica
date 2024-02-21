import Link from 'next/link';
import { page } from '../Layout';
import PhoneList from '@/components/phonesList/PhoneList';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Change } from '@/variablesToChange';

function Header({ pages, phones }: { pages: page[]; phones: string[] }) {
  return (
    <header className="radial-gradient top-0 left-0 right-0 drop-shadow-xl w-full bg-firstColor sticky mx-[auto] flex flex-row justify-between items-center z-10">
      <div className={'flex gap-2 flex-row'}>
        <Link href="./" className="icon-gradient pl-8 pr-6 py-[4px]">
          <img
            src="./logo.png"
            alt="logo"
            className="max-h-[45px] sm:max-h-[60px]"
          />
        </Link>
        <div className={'flex flex-row items-center'}>
          {pages.map(({ url, pageName }) => (
            <div
              key={url}
              className="p-3 hover:cursor-pointer transition-colors duration-200 text-center hover:bg-secondColor rounded-md"
            >
              <Link href={url}>{pageName}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 pr-8 text-buttonDarktColor">
        <div className="grid grid-cols-2 gap-2 text-large flex-wrap">
          {Change.socials.map(({ url, icon, name }) => (
            <Link href={url} title={name} className="h-[20px]">
              <FontAwesomeIcon
                icon={icon}
                className="hover:text-hoverColor cursor-pointer pb-1"
              />
            </Link>
          ))}
        </div>

        <div className="font-bold text-small md:text-base h-[100%]">
          <PhoneList phones={phones} />
        </div>
      </div>
    </header>
  );
}

export default Header;
