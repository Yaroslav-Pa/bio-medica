import SectionForCards from '../sectionForCards/SectionForCards';
import '../layout/header/styles.css';
import { cardHolder } from '@/variablesToChange';
import { CardType } from '../card/Card';


export type CardSectionType = {
  _uid: string;
  services: CardType[];
  title: string;
};

function NamedSectionCards({
  arr,
  isRounded = false,
}: {
  arr: CardSectionType[];
  isRounded?: boolean;
}) {
  const normalComponentListing = arr.map(({ title, services, _uid }) => {
    return (
      <div className='gap-10 flex flex-col' key={`${_uid}+${title}`} id={title}>
        <h1
          className={
            'pl-3 text-xl p-2 font-bold ' +
            (isRounded
              ? ' radial-gradient text-white rounded-lg'
              : ' border-b-2 border-firstColor')
          }
        >
          {title}
        </h1>
        <SectionForCards cardsArr={services} />
      </div>
    );
  });

  const Placeholder = <SectionForCards cardsArr={[cardHolder]} />;

  return arr.length > 0 ? normalComponentListing : Placeholder;
}

export default NamedSectionCards;
