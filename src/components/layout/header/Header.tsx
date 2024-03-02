import Link from 'next/link';
import { page } from '@/variablesToChange';
import PhoneList from '@/components/phonesList/PhoneList';
import './styles.css';
import { Button } from '@/components/button/Button';
import SocialsIsonsList from '@/components/socialsIcons/SocialsiconsList';
import PagesListing from '@/components/pagesListing/PagesListing';

function Header({ phones }: { phones: string[] }) {
  return (
    <header className='radial-gradient top-0 left-0 right-0 drop-shadow-xl w-full bg-firstColor mx-[auto] flex flex-row justify-between items-center z-10'>
      <div className={'flex gap-1 flex-row'}>
        <Link
          href='./'
          className='icon-gradient pl-4 lg:pl-8 pr-4 md:pr-6 py-[4px]'
        >
          <img
            src='./logo.png'
            alt='logo'
            className='max-h-[40px] md:max-h-[50px] lg:max-h-[60px]'
          />
        </Link>
        <div className='hidden mdp:flex flex-row items-center gap-2'>
          <PagesListing />
        </div>
      </div>
      <div className='hidden mdp:flex gap-5 pr-4 lg:pr-8 text-buttonDarktColor items-center'>
        <Button href='http://results.bio-medica.com.ua/' isBlack={false}>
          Отримати результати
        </Button>
        <div className='hidden xl:grid grid-cols-2 gap-2 text-large flex-wrap'>
          {<SocialsIsonsList />}
        </div>
        <div className='hidden  xl:block font-bold text-small  md:text-base h-[100%]'>
          <PhoneList phones={phones} />
        </div>
      </div>
    </header>
  );
}

export default Header;
