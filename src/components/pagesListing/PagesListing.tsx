import Link from 'next/link';
import { Change } from '../../variablesToChange/index';
const { pages } = Change;

function PagesListing({isSimple=false, style=''}:{isSimple?:boolean, style?:string}) {
  return ( 
    pages.map(({ url, pageName }) => (
      <Link
        href={url}
        key={url}
        className={'hover:cursor-pointer transition-colors duration-200 text-center font-bold' + (isSimple? ' hover:text-orangeMax ':' p-2 lg:p-3 hover:bg-secondColor rounded-md ') + style}
      >
        {pageName}
      </Link>
    ))
    );
}

export default PagesListing;