'use client';
import { getFromApi } from '@/apiGetter';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import { useEffect, useState } from 'react';
import { ServicesArrType } from '../AllServices/page';
import { Change } from '@/variablesToChange';
const {FAQApi:storyBlockApi} = Change;

function Faqs() {
  const [infoArr, setInfoArr] = useState<ServicesArrType>({ Sections: [] });

  useEffect(() => {
    getFromApi(storyBlockApi, setInfoArr);
  }, []);

  return (
    <div className='mx-auto flex flex-col max-w-[1200px]'>
      <section className='m-[10%] md:m-20 flex flex-col gap-20'>
        {infoArr.Sections.length <= 0 && (
          <ExtendedComponent question={'Завантаження...'} answer={'Завантаження...'} />
        )}
        {infoArr.Sections.length > 0 && (
          <SectionWithName arr={infoArr.Sections} />
        )}
      </section>
    </div>
  );
}

export default Faqs;
