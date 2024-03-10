import Card, { CardType } from '../card/Card';
import { Change } from '@/variablesToChange';
const {cardHolder} = Change;

function SectionForCards({ cardsArr }: { cardsArr: CardType[] }) {
  return (
    <section className={'flex flex-col gap-5 justify-stretch items-stretch w-full'}>
      {cardsArr.length >= 0 &&
        cardsArr.map((card: any) => {
          return <Card card={card} key={card._uid} />;
        })}
      {cardsArr.length <= 0 && <Card card={cardHolder} />}
    </section>
  );
}

export default SectionForCards;
