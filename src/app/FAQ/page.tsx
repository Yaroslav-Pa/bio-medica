'use client';
import { getFromApi } from '@/apiGetter';
import { useEffect, useState } from 'react';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/faq?cv=1708031547&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function Faqs() {
  const [infoArr, setInfoArr] = useState({ Sections: [] });

  useEffect(() => {
    getFromApi(storyBlockApi, setInfoArr);
  }, []);

  return (
    <>
      <div className='mx-auto flex flex-col '>
        <section className='m-[10%] md:m-20 flex flex-col gap-20'>
          {infoArr.Sections &&
            infoArr.Sections.map(
              ({
                nameOfSection,
                Questions,
              }: {
                nameOfSection: string;
                Questions: [];
              }) => (
                <div className='gap-10 flex flex-col'>
                  <h1 className='pl-3 border-b-2 text-xl font-semibold'>
                    {nameOfSection}
                  </h1>
                  <div className='ml-5 flex flex-col gap-14'>
                    {Questions && Questions.map(({ Question, Answer }) => (
                      <article className='flex flex-col gap-3 pl-3 border-l-2'>
                        <p className='text-large'>&#x2022; {Question}</p>
                        <p className='ml-7 text-large max-w-[1000px]'>
                          {Answer}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              )
            )}
        </section>
      </div>
    </>
  );
}

export default Faqs;
