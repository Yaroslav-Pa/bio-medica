import Link from 'next/link';
import Certificate from './Certificate';

function CertificateSection() {
  const cards = [
    {
      id: 0,
      img: 'https://7universum.com/cert/med.png',
      title: 'Сертификат',
      url: 'https://7universum.com/cert/med.png',
    },
    {
      id: 1,
      img: 'https://7universum.com/cert/med.png',
      title: 'Сертификат сертификатов',
      url: 'https://7universum.com/cert/med.png',
    },
    {
      id: 2,
      img: 'https://7universum.com/cert/med.png',
      title: 'Сертификат сертификат сертификатов',
      url: 'https://7universum.com/cert/med.png',
    },
    {
      id: 3,
      img: 'https://7universum.com/cert/med.png',
      title: 'Сертификат сертификат сертификат сертификатов',
      url: 'https://7universum.com/cert/med.png',
    },
    {
      id: 4,
      img: 'https://7universum.com/cert/med.png',
      title: 'Глюкоза (Glucose, GLU)',
      url: 'https://7universum.com/cert/med.png',
    },
    {
      id: 5,
      img: 'https://7universum.com/cert/med.png',
      title:
        'Розгорнутий аналіз крові (апаратна методика, ручний підрахунок лейкоцитарної формули, ШОЕ) (ЗАК, CBC)',
      url: 'https://7universum.com/cert/med.png',
    },
  ];
  return (
    <section className=" bg-firstColor my-10">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-2 px-3 py-10">
        <div className="flex items-center gap-5">
          <h1 className="text-xl">Ліцензії та сертифікати</h1>
          <Link
            // TODO перевірити посилання на сторінку @усіх аналізів@
            // можна переробити у компонент та закинути змінні для max-w max-h й так керувати розміром
            href="./Services"
            className="p-2 bg-transparent hover:bg-buttonColor border-2 border-solid rounded-lg transition-colors duration-300 border-buttonColor text-textColor hover:text-textWhiteColor"
          >
            Всі
          </Link>
        </div>
        <article className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center">
          {cards &&
            cards
              .slice(0, 4)
              .map(({ id, img, title, url }) => (
                <Certificate key={id} img={img} title={title} url={url} />
              ))}
        </article>
      </div>
    </section>
  );
}

export default CertificateSection;
