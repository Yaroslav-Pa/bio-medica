'use client';
import { getFromApi } from '@/apiGetter';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CardType } from '@/components/card/Card';

import NavSectionForAllService from '@/components/navSectionForAllService/NavSectionForAllService';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import ToTopButton from '@/components/toTopButton/ToTopButton';
import SectionForCards from '@/components/cardsList/CardsList';
import Card from '@/components/card/Card';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/allservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function AllServices() {
  const [servicesArr, setServicesArr] = useState({
    Sections: [{ nameOfSection: '', Objects: [] }],
  });
  const [serchedServices, setSerchedServices]: [
    serchedServices: [],
    setSerchedServices: Function
  ] = useState([]);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const [sectionsNameArray, setSectionsNameArray]: [
    sectionsNameArray: string[],
    setSectionsNameArray: Function
  ] = useState([]);
  const [flattedAllServices, setFlattedAllServices]: [
    flattedAllServices: CardType[],
    setFlattedAllServices: Function
  ] = useState([]);

  useEffect(() => {
    getFromApi(storyBlockApi, setServicesArr);
    setSearch(searchParams.get('search') || '');
  }, []);

  useEffect(() => {
    setSectionsNameArray([]);
    setFlattedAllServices([]);
    servicesArr.Sections.forEach(({ nameOfSection, Objects }) => {
      setSectionsNameArray((sectionsNameArray: string[]) => [
        ...sectionsNameArray,
        nameOfSection,
      ]);
      Objects.forEach((card: any) => {
        console.log('1');
        setFlattedAllServices((flattedAllServices: CardType[]) => [
          ...flattedAllServices,
          card,
        ]);
      });
    });
  }, [servicesArr]);

  useEffect(() => {
    setSerchedServices(filterSearch(search));
  }, [search, servicesArr]);

  const filterSearch = (searchText: string) =>
    flattedAllServices?.filter(({ Name }) =>
      Name?.toLowerCase().includes(searchText.toLowerCase())
    );

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setCurrentHeight(document.documentElement.scrollTop);
    });
  }, []);

  return (
    <div>
      <ToTopButton
        style={
          currentHeight > 500 ? ' opacity-100 visible' : ' opacity-0 invisible'
        }
      />
      <NavSectionForAllService
        searchValue={search}
        setSearch={setSearch}
        array={sectionsNameArray}
      />
      <div className='mx-auto flex flex-col max-w-[1400px]'>
        <section className='m-[10%] md:m-20 flex flex-col gap-40'>
          {search === '' && servicesArr.Sections && (
            <SectionWithName
              arr={servicesArr.Sections}
              isRounded={true}
              isForCard={true}
            />
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
