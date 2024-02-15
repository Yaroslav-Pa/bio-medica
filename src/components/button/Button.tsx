import Link from 'next/link';
import React from 'react';

export const Button = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link
      href={href}
      className="p-2 hover:bg-orangeLight bg-secondColor border-2 border-solid border-orangeDark rounded-lg transition-colors duration-300 text-textColor font-bold"
    >
      {children}
    </Link>
  );
};
