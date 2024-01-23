import Link from 'next/link';
import { page } from '../header/Header';
function Navigation(
  { pages }: { pages: page[] },
  isRow: boolean = true,
  isWithBg: boolean = true
) {
  return (
    <nav className={'flex gap-5' + (isRow ? ' flex-row' : ' flex-col')}>
      {pages.map(({ url, pageName }) => (
        <div
          key={url}
          className={
            'm-3 hover:text-hoverColor hover:cursor-pointer transition-colors duration-100 text-center' +
            (isWithBg &&
              ' p-2 hover:bg-buttonColor rounded-md transition-colors duration-200')
          }
        >
          <Link href={url}>{pageName}</Link>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
