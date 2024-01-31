import Link from 'next/link';

function TopServices() {
  const cards = [
    {
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      name: 'Розгорнутий аналіз крові (апаратна методика, ручний підрахунок лейкоцитарної формули, ШОЕ) (ЗАК, CBC)',
      timeInDeys: 1,
      price: 300,
    },
    {
      img: 'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg',
      name: 'Глюкоза (Glucose, GLU)',
      timeInDeys: 12,
      price: 3,
    },
  ];
  return (
    <section className=" bg-firstColor my-10">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-3 px-3 py-10">
        <h1 className="text-xl">ТОП аналізів</h1>
        <article className='flex flex-col justify-center items-center'>
          <div className='grid grid-cols-3 justify-stretch items-stretch'>

          </div>
          <Link
            // TODO перевірити посилання на сторінку усіх аналізів 
            // можна переробити у компонент та закинути змінні для max-w max-h й так керувати розміром
            href="./Services"
            className="p-2 bg-transparent hover:bg-buttonColor border-2 border-solid rounded-lg transition-colors duration-300 border-buttonColor text-textColor hover:text-textWhiteColor"
          >
            Продивитись усі
          </Link>
        </article>
      </div>
    </section>
  );
}

export default TopServices;
