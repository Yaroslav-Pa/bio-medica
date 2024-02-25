'use client';
import React from 'react';
import Certificate from './Certificate';
import { Button } from '../button/Button';
import { useEffect, useState } from 'react';
import { getFromApi } from '../../apiGetter';

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/allcertificates?cv=1707941033&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function CertificateSection() {
  const [cards, setCards] = useState({ Certificates: [] });
  useEffect(() => {
    getFromApi(storyBlockApi, setCards);
  }, []);
  return (
    <section className=' bg-firstColor my-10'>
      <div className='max-w-containerWidth mx-auto flex flex-col gap-4 px-3 py-10'>
        <div className='flex items-center gap-5'>
          <h1 className='text-xl font-bold'>Ліцензії та сертифікати</h1>
          <Button href='./Services'>Всі</Button>
        </div>
        <article className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center'>
          {cards &&
            cards.Certificates.slice(0, 4).map(
              ({ _uid, img: { filename }, title, url: { url } }) => (
                <Certificate
                  key={_uid}
                  img={filename}
                  title={title}
                  url={url ? url : filename}
                />
              )
            )}
        </article>
      </div>
    </section>
  );
}

export default CertificateSection;
