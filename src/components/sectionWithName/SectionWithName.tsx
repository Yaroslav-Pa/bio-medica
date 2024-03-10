import Card from '../card/Card';
import SectionForCards from '../cardsList/CardsList';
import '../layout/header/styles.css';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';

function SectionWithName({
  arr,
  isRounded = false,
  isForCard = false,
}: {
  arr: any[];
  isRounded?: boolean;
  isForCard?: boolean;
}) {
  return arr.map(
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
            <SectionForCards>
              {Objects.map((card: any) => {
                return <Card card={card} key={card._uid} />;
              })}
            </SectionForCards>
          ) : (
            <div className='ml-5 flex flex-col gap-4'>
              {Objects.map(({ Question, Answer }) => (
                <ExtendedComponent question={Question} answer={Answer} />
              ))}
            </div>
          )}
        </div>
      );
    }
  );
}

export default SectionWithName;
