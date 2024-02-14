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
  // const cards = [
  //   {
  //     id: 0,
  //     img: 'https://7universum.com/cert/med.png',
  //     title: 'Сертификат',
  //     url: 'https://7universum.com/cert/med.png',
  //   },
  //   {
  //     id: 1,
  //     img: 'https://7universum.com/cert/med.png',
  //     title: 'Сертификат сертификатов',
  //     url: 'https://7universum.com/cert/med.png',
  //   },
  //   {
  //     id: 2,
  //     img: 'https://7universum.com/cert/med.png',
  //     title: 'Сертификат сертификат сертификатов',
  //     url: 'https://7universum.com/cert/med.png',
  //   },
  //   {
  //     id: 3,
  //     img: 'https://7universum.com/cert/med.png',
  //     title: 'Сертификат сертификат сертификат сертификатов',
  //     url: 'https://7universum.com/cert/med.png',
  //   },
  //   {
  //     id: 4,
  //     img: 'https://7universum.com/cert/med.png',
  //     title: 'Глюкоза (Glucose, GLU)',
  //     url: 'https://7universum.com/cert/med.png',
  //   },
  //   {
  //     id: 5,
  //     img: 'https://7universum.com/cert/med.png',
  //     title:
  //       'Розгорнутий аналіз крові (апаратна методика, ручний підрахунок лейкоцитарної формули, ШОЕ) (ЗАК, CBC)',
  //     url: 'https://7universum.com/cert/med.png',
  //   },
  // ];
  return (
    <section className=' bg-firstColor my-10'>
      <div className='max-w-containerWidth mx-auto flex flex-col gap-4 px-3 py-10'>
        <div className='flex items-center gap-5'>
          <h1 className='text-xl'>Ліцензії та сертифікати</h1>
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
