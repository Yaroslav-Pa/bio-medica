import Link from 'next/link';
import { page } from '../header/Header';
function Navigation({pages}:{pages: page[]}) {
  return (
    <nav className="flex flex-row gap-5">
      {pages.map(({ url, pageName }) => (
        <Link
          href={url}
          key={url}
          className="hover:text-hoverColor transition-colors duration-200"
        >
          {pageName}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
