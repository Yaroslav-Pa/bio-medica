import Card from '../card/Card';
import SectionForCards from '../sectionForCards/SectionForCards';
import '../layout/header/styles.css';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import { Change } from '@/variablesToChange';
const { cardHolder } = Change;

function SectionWithName({
  arr,
  isRounded = false,
  isForCard = false,
}: {
  arr: any[];
  isRounded?: boolean;
  isForCard?: boolean;
}) {
  const normalComponentListing = arr.map(
    ({
      nameOfSection,
      Objects,
      _uid,
    }: {
      nameOfSection: string;
      Objects: [];
      _uid: string;
    }) => {
      return (
        <div
          className='gap-10 flex flex-col'
          key={`${_uid}+${nameOfSection}`}
          id={nameOfSection}
        >
          <h1
            className={
              'pl-3 text-xl p-2 font-bold ' +
              (isRounded
                ? ' radial-gradient text-white rounded-lg'
                : ' border-b-2 border-firstColor')
            }
          >
            {nameOfSection}
          </h1>
          {isForCard ? (
            <SectionForCards cardsArr={Objects} />
          ) : (
            <div className='ml-5 flex flex-col gap-4'>
              {Objects.map(({ Question, Answer }, index) => (
                <ExtendedComponent
                  question={Question}
                  answer={Answer}
                  key={`${Question}+${Answer}+${index}`}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
  );

  const Placeholder = isForCard ? (
    <SectionForCards cardsArr={[cardHolder]} />
  ) : (
    <div className='ml-5 flex flex-col gap-4'>
      <ExtendedComponent question={'Loading...'} answer={'Loading...'} />
    </div>
  );

  return arr.length > 0 ? normalComponentListing : Placeholder;
}

export default SectionWithName;
