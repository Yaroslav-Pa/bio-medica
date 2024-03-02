import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Change } from '@/variablesToChange';

function SocialsIsonsList() {
  return Change.socials.map(({ url, icon, name }) => (
    <Link href={url} title={name} key={url} className='h-[20px]'>
      <FontAwesomeIcon
        icon={icon}
        className='hover:text-orangeMax transition-colors duration-200 cursor-pointer pb-1'
      />
    </Link>
  ));
}

export default SocialsIsonsList;
