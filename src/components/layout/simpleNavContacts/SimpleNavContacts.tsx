import SocialsIsonsList from '@/components/socialsIcons/SocialsiconsList';
import PagesListing from '@/components/pagesListing/PagesListing';
import PhoneList from '@/components/phonesList/PhoneList';
import { Change } from '@/variablesToChange/index';
const { phones } = Change;

function SimpleNavContacts({
  moreStyling = '',
  children = null,
}: {
  moreStyling?: string;
  children?: any;
}) {
  return (
    <section
      className={
        'flex flex-col ssm:flex-row ssm:justify-evenly gap-10 transition-opacity duration-300 w-full min-h-fit py-5 px-2 ' +
        moreStyling
      }
    >
      <div className='flex flex-col items-center gap-2'>
        <PagesListing isSimple={true} />
      </div>
      <div className='flex flex-col gap-5 items-center'>
        <div className='flex flex-row gap-4 text-large flex-wrap'>
          <SocialsIsonsList />
        </div>
        <div className='flex flex-col gap-2 font-bold  items-center text-small  md:text-base h-[100%]'>
          <PhoneList phones={phones} />
        </div>
        {children}
      </div>
    </section>
  );
}

export default SimpleNavContacts;
