'use client';
import { getFromApi } from '@/apiGetter';
import QuestionAnswer from '@/components/questionAnswer/QuestionAnswer';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import { useEffect, useState } from 'react';
import Card from '../../components/card/Card';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/allservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function AllServices() {
  const [servicesArr, setServicesArr] = useState({
    Sections: [{ Objects: [] }],
  });

  useEffect(() => {
    getFromApi(storyBlockApi, setServicesArr);
  }, []);

  const servicesListing = servicesArr.Sections.map(({ Objects }) =>
    Objects.map((card: any) => <Card card={card} key={card._uid} />)
  );

  return (
    <div className='mx-auto flex flex-col max-w-[1200px]'>
      <section className='m-[10%] md:m-20 flex flex-col gap-20'>
        {servicesArr.Sections && (
          <SectionWithName arr={servicesArr.Sections}>
            <div className='grid grid-cols-3 gap-10 justify-stretch items-stretch'>
              {servicesListing}
            </div>
          </SectionWithName>
        )}
      </section>
    </div>
  );
}

export default AllServices;
