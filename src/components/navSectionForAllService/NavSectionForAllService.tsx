function NavSectionForAllService({
  searchValue,
  setSearch,
  array,
}: {
  searchValue: string;
  setSearch: Function;
  array?: string[];
}) {
  return (
    <section className='fixed top-16 left-5 m-5 flex flex-col w-fit gap-5'>
      <div>
        <h2>Пошук аналізів</h2>
        <input
          className='border-2 rounded-lg px-4 py-1 border-stone-400'
          type='text'
          name='searchField'
          value={searchValue}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={"flex flex-col gap-2 transition-opacity "+(searchValue!=''? ' opacity-0 invisible':' opacity-100 visible')}>
        <h2 className="border-b-2">Доступні аналізів по розділам</h2>
        <div className='flex flex-col gap-3'>
          {array && array.map((text) => <a href={`#${text}`} className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:left-0 after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left transition-all duration-300 px-5 pl-0 hover:pl-3">{text}</a>)}
        </div>
      </div>

    </section>
  );
}

export default NavSectionForAllService;
