function NavSectionForAllService({
  value,
  setSearch,
}: {
  value: string;
  setSearch: Function;
}) {
  return (
    <section>
      <div className=''>
        <h2>Пошук сервісу</h2>
        <input
          className='border-2 rounded-lg px-4 py-1 border-stone-400'
          type='text'
          name='searchField'
          value={value}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </section>
  );
}

export default NavSectionForAllService;
