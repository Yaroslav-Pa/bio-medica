'use client';
import { getFromApi, transformSections } from '@/apiGetter';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CardType } from '@/components/card/Card';
import NavSectionForAllService from '@/components/navSectionForAllService/NavSectionForAllService';
import ToTopButton from '@/components/toTopButton/ToTopButton';
import SectionForCards from '@/components/sectionForCards/SectionForCards';
import Card from '@/components/card/Card';
import { Change, cardHolder } from '@/variablesToChange';
import NamedSectionCards from '@/components/namedSectionCards/NamedSectionCards';
import { CardSectionType } from '@/components/namedSectionCards/NamedSectionCards';
const { AllServicesApi: storyBlockApi } = Change;



function AllServices() {
  const [servicesArr, setServicesArr] = useState<CardSectionType[]>([]);
  const [serchedServices, setSerchedServices] = useState<CardType[]>([]);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const [sectionsNameArray, setSectionsNameArray] = useState<string[]>([]);
  const [flattedAllServices, setFlattedAllServices] = useState<CardType[]>([]);

  useEffect(() => {
    getFromApi(storyBlockApi, setServicesArr, transformSections);
    setSearch(searchParams.get('search') || '');
  }, []);

  useEffect(() => {
    setSectionsNameArray([]);
    setFlattedAllServices([]);
    servicesArr.forEach(({ title, services }) => {
      setSectionsNameArray((sectionsNameArray: string[]) => [
        ...sectionsNameArray,
        title,
      ]);
      services?.forEach((card: CardType) => {
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
        currentScroll={currentHeight}
      />
      <div className='mx-auto flex flex-col max-w-[1400px]'>
        <section className='m-[10%] md:m-20 flex flex-col gap-y-32'>
          {search === '' && servicesArr.length > 0 && (
            <NamedSectionCards arr={servicesArr} isRounded={true} />
          )}
          {search !== '' && servicesArr.length > 0 && (
            <SectionForCards cardsArr={serchedServices} />
          )}
          {search === '' && servicesArr.length <= 0 && (
            <Card card={cardHolder} />
          )}
        </section>
      </div>
    </div>
  );
}

export default AllServices;
