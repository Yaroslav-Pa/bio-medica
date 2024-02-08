import Link from 'next/link';
import Card from '../card/Card';
import { Button } from '../button/Button';

function TopServices() {
  const cards = [
    {
      id: 0,
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      title:
        'Розгорнутий аналіз крові (апаратна методика, ручний підрахунок лейкоцитарної формули, ШОЕ) (ЗАК, CBC)',
      timeInDays: 1,
      price: 300,
      url: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
    },
    {
      id: 1,
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      title: 'Глюкоза (Glucose, GLU)',
      timeInDays: 12,
      price: 3,
      url: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
    },
    {
      id: 2,
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      title:
        'Розгорнутий аналіз крові (апаратна методика, ручний підрахунок лейкоцитарної формули, ШОЕ) (ЗАК, CBC)',
      timeInDays: 2,
      price: 3,
      url: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
    },
    {
      id: 3,
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      title:
        'Розгорнутий аналіз крові (апаратна методика, ручний підрахунок лейкоцитарної формули, ШОЕ) (ЗАК, CBC)',
      timeInDays: 1,
      price: 300,
      url: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
    },
    {
      id: 4,
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      title: 'Глюкоза (Glucose, GLU)',
      timeInDays: 12,
      price: 3,
      url: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
    },
    {
      id: 5,
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      title:
        'Розгорнутий аналіз крові (апаратна методика, ручний підрахунок лейкоцитарної формули, ШОЕ) (ЗАК, CBC)',
      timeInDays: 2,
      price: 3,
      url: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
    },
  ];
  return (
    <section className=" bg-firstColor my-10">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-10 px-3 py-10">
        <h1 className="text-xl">ТОП аналізів</h1>
        <article className="flex flex-col justify-center items-center gap-10">
          <div className="grid grid-cols-3 gap-10 justify-stretch items-stretch">
            {cards &&
              cards.map(({ id, img, title, timeInDays, price, url }) => (
                <div key={id}>
                  <Card
                    img={img}
                    title={title}
                    timeInDays={timeInDays}
                    price={price}
                    url={url}
                  />
                </div>
              ))}
          </div>
          {/* // TODO перевірити посилання на сторінку @усіх аналізів@ // можна
          переробити у компонент та закинути змінні для max-w max-h й так
          керувати розміром */}
          <Button href="./Services">Продивитись усі</Button>
        </article>
      </div>
    </section>
  );
}

export default TopServices;
