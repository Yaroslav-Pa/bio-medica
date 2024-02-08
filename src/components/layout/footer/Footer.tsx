import Link from 'next/link';
import { page } from '../Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import PhoneList from '@/components/phonesList/PhoneList';

function Footer({ pages, phones }: { pages: page[]; phones: string[] }) {
  return (
    <footer className="text-textColor">
      <section className="flex flex-row justify-evenly items-center bg-firstColor py-10">
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
            {/*TODO переробити */}
            {/* хотів зробити нормальне перебір ссилок мапом, але не знайшов як нормально запихати щоб icon=icon, робити інший компонет не став бо  */}
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-hoverColor cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-hoverColor cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className="hover:text-hoverColor cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="hover:text-hoverColor cursor-pointer"
            />
          </div>
          <div className="font-bold text-small md:text-base text-center">
            <PhoneList phones={phones} />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
