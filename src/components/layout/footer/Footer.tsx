import Link from 'next/link';
import { page } from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneList from '@/components/phonesList/PhoneList';
import { Change } from '@/variablesToChange';

function Footer({ pages, phones }: { pages: page[]; phones: string[] }) {
  return (
    <footer className="flex flex-row justify-evenly items-center bg-firstColor py-10">
      <nav className={'flex  flex-col'}>
        {pages.map(({ url, pageName }) => (
          <div
            key={url}
            className="px-2 py-1 hover:cursor-pointer transition-colors duration-200 text-center hover:text-hoverColor rounded-md"
          >
            <Link href={url}>{pageName}</Link>
          </div>
        ))}
      </nav>
      <div className="flex flex-col  gap-5">
        <div className="flex gap-5 text-xl text-buttonDarktColor">
          {Change.socials.map(({ url, icon, name }) => (
            <Link href={url} title={name} key={url}>
              <FontAwesomeIcon
                icon={icon}
                className="hover:text-hoverColor cursor-pointer"
              />
            </Link>
          ))}
        </div>
        <div className="font-bold text-small md:text-base text-center">
          <PhoneList phones={phones} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
