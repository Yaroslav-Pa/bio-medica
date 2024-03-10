'use client';
import { getFromApi } from '@/apiGetter';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CardType } from '@/components/card/Card';

import NavSectionForAllService from '@/components/navSectionForAllService/NavSectionForAllService';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import ToTopButton from '@/components/toTopButton/ToTopButton';
import SectionForCards from '@/components/sectionForCards/SectionForCards';
import Card from '@/components/card/Card';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/allservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

export type Section = {
  _uid: string;
  Objects: CardType[];
  component: string;
  nameOfSection: string;
};

export type ServicesArrType = {
  Sections: Section[];
};

function AllServices() {
  const [servicesArr, setServicesArr] = useState<ServicesArrType>({
    Sections: [],
  });
  const [serchedServices, setSerchedServices] = useState<CardType[]>([]);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const [sectionsNameArray, setSectionsNameArray] = useState<string[]>([]);
  const [flattedAllServices, setFlattedAllServices] = useState<CardType[]>([]);

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
      Objects.forEach((card: CardType) => {
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

  console.log(servicesArr.Sections);

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
        <section className='m-[10%] md:m-20 flex flex-col gap-y-32'>
          {search === '' && servicesArr.Sections.length >= 0 && (
            <SectionWithName
              arr={servicesArr.Sections}
              isRounded={true}
              isForCard={true}
            />
          )}
          {search !== '' && <SectionForCards cardsArr={serchedServices} />}
        </section>
      </div>
    </div>
  );
}

export default AllServices;
