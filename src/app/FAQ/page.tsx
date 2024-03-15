'use client';
import { getFromApi, transformSections } from '@/apiGetter';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import { useEffect, useState } from 'react';
import { Section } from '../AllServices/page';
import { Change } from '@/variablesToChange';
import NamedSectionQuestions from '@/components/namedSectionQuestions/NamedSectionQuestions';
import { QuestionSectionType } from '@/components/namedSectionQuestions/NamedSectionQuestions';
const { FAQApi: storyBlockApi } = Change;

function Faqs() {
  const [sections, setSections] = useState<{
    Sections: QuestionSectionType[];
  }>({ Sections: [] });

  useEffect(() => {
    getFromApi(storyBlockApi, setSections);
  }, []);

  return (
    <div className='mx-auto flex flex-col max-w-[1200px]'>
      <section className='m-[10%] md:m-20 flex flex-col gap-20'>
        {sections.Sections?.length <= 0 && (
          <ExtendedComponent
            question={'Завантаження...'}
            answer={'Завантаження...'}
          />
        )}
        {sections.Sections?.length > 0 && (
          <NamedSectionQuestions arr={sections.Sections} />
        )}
      </section>
    </div>
  );
}

export default Faqs;
