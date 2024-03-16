import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function NavSectionForAllService({
  searchValue,
  setSearch,
  array,
  currentScroll,
}: {
  searchValue: string;
  setSearch: Function;
  array?: string[];
  currentScroll?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const searchAndSectionNameListing = (
    <>
      <div
        className={
          !isOpen
            ? ' opacity-0 invisible 3xl:opacity-100 3xl:visible'
            : ' opacity-100 visible'
        }
      >
        <h2>Пошук аналізів</h2>
        <input
          className='border-2 rounded-lg px-3 py-1 border-cardSecondColor 3xl:border-stone-300'
          type='text'
          name='searchField'
          value={searchValue}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div
        className={
          'flex flex-col gap-2 transition-opacity duration-500 px-6 md:px-0 ' +
          (searchValue != '' || !isOpen
            ? ' opacity-0 invisible 3xl:opacity-100 3xl:visible'
            : ' opacity-100 visible')
        }
      >
        <h2 className='border-b-2 border-b-cardSecondColor 3xl:border-b-stone-300'>
          Доступні аналізів по розділам
        </h2>
        {array && (
          <div className='flex flex-col gap-3 overflow-auto overflow-y-scroll max-h-[70vh] 3xl:max-h-[58vh]'>
            {array.length > 0 &&
              array.map((text) =>
                text.split('\n').map((title) => {
                  if (title === '') return;
                  return (
                    <Link
                      href={`#${text.replace(/\s/g, '')}`}
                      scroll={true}
                      key={title}
                      className="relative text-base md:text-medium lg:text-large w-fit block after:block after:content-[''] after:absolute after:left-0 after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-300 px-5 pl-0 hover:pl-3 3xl:hover:pl-1 3xl:max-w-[250px] 4xl:max-w-[400px] 5xl:max-w-[520px]"
                    >
                      {title}
                    </Link>
                  );
                })
              )}
            {array.length <= 0 && <div>Звантаження розділів...</div>}
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      <section
        className={
          'hidden 3xl:flex flex-col fixed left-5 m-5 w-fit gap-5 transition-all duration-300' +
          (currentScroll && currentScroll > 60 ? ' top-3' : ' top-16')
        }
      >
        {searchAndSectionNameListing}
      </section>
      <section className='3xl:hidden'>
        <div
          className={
            'fixed top-24 h-fit max-w-[25px] sm:max-w-[40px] bg-transparent rounded-r-md [writing-mode:vertical-rl] py-2 sm:px-2 text-center border-l-0 border-2 border-cardSecondColor hover:cursor-pointer font-semibold z-0 transition-opacity duration-200' +
            (isOpen ? ' opacity-0 invisible' : ' opacity-100 visible')
          }
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
        >
          Пошук та секції
        </div>
        <div
          className={
            'fixed top-0 bottom-0 w-screen md:left-0 md:w-fit bg-white md:bg-opacity-100 z-10 transition-all duration-500 flex flex-col justify-start items-center gap-6 pt-10 sm:pl-14 ssm:px-10 ssm:py-10 md:max-w-[700px]' +
            (isOpen ? ' opacity-100 visible' : ' opacity-0 invisible') +
            (searchValue !== '' ? ' bg-opacity-50' : ' bg-opacity-90')
          }
        >
          <div
            className='fixed top-3 left-5 text-[24px] md:text-[28px] hover:cursor-pointer'
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          {searchAndSectionNameListing}
        </div>
      </section>
    </>
  );
}

export default NavSectionForAllService;
