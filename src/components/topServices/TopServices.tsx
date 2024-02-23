'use client';
import Link from 'next/link';
import Card from '../card/Card';
import { Button } from '../button/Button';
import { getFromApi } from '../../apiGetter';
import { useEffect, useState } from 'react';
import SectionForCards from '../cardsList/CardsList';
const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/topservices?cv=1708287624&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function TopServices() {
  const [cards, setCards] = useState({ AllSevices: [] });

  const cardListing = cards.AllSevices.map((card: any) => (
    <div key={card._uid}>
      <Card card={card} />
    </div>
  ));

  useEffect(() => {
    getFromApi(storyBlockApi, setCards);
  }, []);

  return (
    <section className=' bg-firstColor my-10'>
      <div className='max-w-[1000px] mx-auto flex flex-col gap-10 px-3 py-10'>
        <h1 className='text-xl font-bold'>ТОП аналізів</h1>
        <article className='flex flex-col justify-center items-center gap-10'>
          <SectionForCards>{cards && cardListing}</SectionForCards>
          {/* // TODO перевірити посилання на сторінку @усіх аналізів*/}
          <Button href='./AllServices'>Продивитись усі</Button>
        </article>
      </div>
    </section>
  );
}

export default TopServices;
