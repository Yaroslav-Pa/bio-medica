'use client';
import { getFromApi } from '@/apiGetter';
import QuestionAnswer from '@/components/questionAnswer/QuestionAnswer';
import SectionWithName from '@/components/sectionWithName/SectionWithName';
import { useEffect, useState } from 'react';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/faq?version=published&token=FYShrSsmafxPX5CaF9YMKAtt&cv=1708031949';

function Faqs() {
  const [infoArr, setInfoArr] = useState({ Sections: [{ Questions: [] }] });

  useEffect(() => {
    getFromApi(storyBlockApi, setInfoArr);
  }, []);

  const questionListing = infoArr.Sections.map(({ Questions }) =>
    Questions.map(({ Question, Answer }) => (
      <QuestionAnswer question={Question} answer={Answer} />
    ))
  );

  return (
    <div className='mx-auto flex flex-col max-w-[1200px]'>
      <section className='m-[10%] md:m-20 flex flex-col gap-20'>
        {infoArr.Sections && (
          <SectionWithName arr={infoArr.Sections}>
            <div className='ml-5 flex flex-col gap-14'>{questionListing}</div>
          </SectionWithName>
        )}
      </section>
    </div>
  );
}

export default Faqs;
