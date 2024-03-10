import Card, { CardType } from '../card/Card';

function SectionForCards({ cardsArr }: { cardsArr: CardType[] }) {
  return (
    <section
      className={'flex flex-col gap-5 justify-stretch items-stretch w-full'}
    >
      {cardsArr.length >= 0 &&
        cardsArr.map((card: any) => {
          return <Card card={card} key={card._uid} />;
        })}
      {cardsArr.length <= 0 && (
        <p className='w-full text-center'>Вибачте, нічого не знайдено.</p>
      )}
    </section>
  );
}

export default SectionForCards;
