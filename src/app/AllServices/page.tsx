'use client';
import { getFromApi } from '@/apiGetter';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';
import { useSearchParams } from 'next/navigation';
import SectionForCards from '@/components/cardsList/CardsList';
import NavSectionForAllService from '@/components/navSectionForAllService/NavSectionForAllService';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/allservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function AllServices() {
  const [servicesArr, setServicesArr] = useState({
    Sections: [{ nameOfSection: '', Objects: [] }],
  });
  const [search, setSearch] = useState('');
  const [serchedServices, setSerchedServices]: [
    serchedServices: [],
    setSerchedServices: Function
  ] = useState([]);
  const flattedAllServices: any[] = [];
  const searchParams = useSearchParams();

  const sectionsNameArray: string[] = [];

  const servicesListing = servicesArr.Sections.map(
    ({ nameOfSection, Objects }) => {
      sectionsNameArray.push(nameOfSection);
      return Objects.map((card: any) => {
        flattedAllServices.push(card);
        return <Card card={card} key={card._uid} />;
      });
    }
  );

  useEffect(() => {
    getFromApi(storyBlockApi, setServicesArr);
    setSearch(searchParams.get('search') || '');
  }, []);

  useEffect(() => {
    setSerchedServices(filterSearch(search));
  }, [search, servicesArr]);

  const filterSearch = (searchText: string) =>
    flattedAllServices.filter(({ Name }) =>
      Name.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div>
      <NavSectionForAllService
        searchValue={search}
        setSearch={setSearch}
        array={sectionsNameArray}
      />
      <div className="mx-auto flex flex-col max-w-[1400px]">
        <section className="m-[10%] md:m-20 flex flex-col gap-40">
          {search === '' && servicesArr.Sections && (
            <SectionWithName
              arr={servicesArr.Sections}
              isRounded={true}
              isForCard={true}
            >
              {servicesListing}
            </SectionWithName>
          )}
          {search !== '' && (
            <SectionForCards gridColumns={4}>
              {serchedServices.map((card: any) => (
                <Card card={card} key={card._uid} />
              ))}
            </SectionForCards>
          )}
        </section>
      </div>
    </div>
  );
}

export default AllServices;
