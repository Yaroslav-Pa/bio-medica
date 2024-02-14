'use client';
import Link from 'next/link';
import Card from '../card/Card';
import { Button } from '../button/Button';
import { getFromApi } from '../../apiGetter';
import { useEffect, useState } from 'react';

const standartImg =
  'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg';
const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/allservices?cv=1707936437&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function TopServices() {
  const [cards, setCards] = useState({ AllSevices: [] });

  const cardListing = cards.AllSevices.map(
    ({ _uid, Image: { filename }, Name, Days, Price, url }) => (
      <div key={_uid}>
        <Card
          img={filename === '' ? standartImg : filename}
          title={Name}
          timeInDays={Days}
          price={Price}
          url={url}
        />
      </div>
    )
  );

  useEffect(() => {
    getFromApi(storyBlockApi, setCards);
  }, []);

  return (
    <section className=' bg-firstColor my-10'>
      <div className='max-w-[1000px] mx-auto flex flex-col gap-10 px-3 py-10'>
        <h1 className='text-xl'>ТОП аналізів</h1>
        <article className='flex flex-col justify-center items-center gap-10'>
          <div className='grid grid-cols-3 gap-10 justify-stretch items-stretch'>
            {cards && cardListing}
          </div>
          {/* // TODO перевірити посилання на сторінку @усіх аналізів@ // можна
          переробити у компонент та закинути змінні для max-w max-h й так
          керувати розміром */}
          <Button href='./Services'>Продивитись усі</Button>
        </article>
      </div>
    </section>
  );
}

export default TopServices;
