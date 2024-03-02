import Link from 'next/link';
import { page } from '@/variablesToChange';
import PhoneList from '@/components/phonesList/PhoneList';
import SocialsIsonsList from '@/components/socialsIcons/SocialsiconsList';
import PagesListing from '@/components/pagesListing/PagesListing';

function Footer({ pages, phones }: { pages: page[]; phones: string[] }) {
  return (
    <footer className="flex flex-row justify-evenly items-center bg-firstColor py-10">
      <nav className={'flex  flex-col gap-1'}>
        {<PagesListing isSimple={true}/>}
      </nav>
      <div className="flex flex-col gap-3 sm:gap-5">
        <div className="flex justify-evenly sm:gap-5 text-xl text-buttonDarktColor">
          <SocialsIsonsList/>
        </div>
        <div className="font-bold text-small md:text-base text-center">
          <PhoneList phones={phones} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
