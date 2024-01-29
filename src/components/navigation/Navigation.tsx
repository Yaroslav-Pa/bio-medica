import Link from 'next/link';
import { page } from '../header/Header';

function Navigation({
  pages,
  isRow = true,
  isWithBg = true,
  isFirstColorForButton = true,
}: {
  pages: page[];
  isRow?: boolean;
  isWithBg?: boolean;
  isFirstColorForButton?: boolean;
}) {
  return (
    <nav className={'flex gap-5' + (isRow ? ' flex-row' : ' flex-col')}>
      {pages.map(({ url, pageName }) => (
        <div
          key={url}
          className={
            'm-3 hover:cursor-pointer transition-colors duration-200 text-center' +
            (isFirstColorForButton
              ? ' hover:text-hoverColor '
              : '') +
            (isWithBg ?
              ' p-2 hover:bg-buttonBrightColor rounded-md':'')
          }
        >
          <Link href={url}>{pageName}</Link>
        </div>
      ))}
    </nav>
  );
}

export default Navigation;
