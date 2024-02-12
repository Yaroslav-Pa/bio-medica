import Link from 'next/link';
import React from 'react';

export const Button = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link
      href={href}
      className="p-2 hover:bg-thirdColor border-2 border-solid border-[#778d99] rounded-lg transition-colors duration-300 text-textColor font-bold"
    >
      {children}
    </Link>
  );
};
