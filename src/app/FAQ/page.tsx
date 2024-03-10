'use client';
import { getFromApi } from '@/apiGetter';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import { useEffect, useState } from 'react';
import { ServicesArrType } from '../AllServices/page';
const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/faq?version=published&token=FYShrSsmafxPX5CaF9YMKAtt&cv=1708031949';

function Faqs() {
  const [infoArr, setInfoArr] = useState<ServicesArrType>({ Sections: [] });

  useEffect(() => {
    getFromApi(storyBlockApi, setInfoArr);
  }, []);

  return (
    <div className='mx-auto flex flex-col max-w-[1200px]'>
      <section className='m-[10%] md:m-20 flex flex-col gap-20'>
        {infoArr.Sections.length <= 0 && (
          <ExtendedComponent question={'Loading...'} answer={'Loading...'} />
        )}
        {infoArr.Sections.length > 0 && (
          <SectionWithName arr={infoArr.Sections} />
        )}
      </section>
    </div>
  );
}

export default Faqs;
