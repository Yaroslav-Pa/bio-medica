'use client';
import { getFromApi } from '@/apiGetter';
import QuestionAnswer from '@/components/questionAnswer/QuestionAnswer';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { useSearchParams } from 'next/navigation';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/allservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function AllServices() {
  const [servicesArr, setServicesArr] = useState({
    Sections: [{ Objects: [] }],
  });
  const [search, setSearch] = useState('');
  const [serchedServices, setSerchedServices] = useState([]);
  const flattedAllServices: any[] = [];
  const searchParams = useSearchParams();

  useEffect(() => {
    getFromApi(storyBlockApi, setServicesArr);
    setSearch(searchParams.get('search') || '');
  }, []);

  const servicesListing = servicesArr.Sections.map(({ Objects }) =>
    Objects.map((card: any) => {
      flattedAllServices.push(card);
      return <Card card={card} key={card._uid} />;
    })
  );

  useEffect(() => {
    setSerchedServices(filterSearch(search));
  }, [search]);
  const filterSearch = (searchText: string) =>
    flattedAllServices.filter(({ Name }) =>
      Name.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <div className="mx-auto flex flex-col max-w-[1200px]">
      <section className="m-[10%] md:m-20 flex flex-col gap-20">
        <input
          className="border-2 rounded-lg px-4 py-1"
          type="text"
          name="searchField"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {search === '' && servicesArr.Sections && (
          <SectionWithName arr={servicesArr.Sections}>
            <div className="grid grid-cols-3 gap-10 justify-stretch items-stretch">
              {servicesListing}
            </div>
          </SectionWithName>
        )}
        <div className="grid grid-cols-3 gap-10 justify-stretch items-stretch">
          {serchedServices.map((card: any) => (
            <Card card={card} key={card._uid} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllServices;
