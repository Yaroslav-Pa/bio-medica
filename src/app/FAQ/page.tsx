'use client';
import { getFromApi, transformSections } from '@/apiGetter';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import { useEffect, useState } from 'react';
import { Section } from '../AllServices/page';
import { Change } from '@/variablesToChange';
const { FAQApi: storyBlockApi } = Change;

function Faqs() {
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    getFromApi(storyBlockApi, setSections, transformSections);
  }, []);

  return (
    <div className="mx-auto flex flex-col max-w-[1200px]">
      <section className="m-[10%] md:m-20 flex flex-col gap-20">
        {sections.length <= 0 && (
          <ExtendedComponent
            question={'Завантаження...'}
            answer={'Завантаження...'}
          />
        )}
        {sections.length > 0 && <SectionWithName arr={sections} />}
      </section>
    </div>
  );
}

export default Faqs;
