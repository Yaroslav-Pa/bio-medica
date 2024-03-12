import SectionForCards from '../sectionForCards/SectionForCards';
import '../layout/header/styles.css';
import ExtendedComponent from '@/components/extendedComponent/ExtendedComponent';
import { cardHolder } from '@/variablesToChange';
import { Section } from '@/app/AllServices/page';

type Question = {
  Question: string;
  Answer: string;
};

function SectionWithName({
  arr,
  isRounded = false,
  isForCard = false,
}: {
  arr: Section[];
  isRounded?: boolean;
  isForCard?: boolean;
}) {
  const normalComponentListing = arr.map(({ title, services, _uid }) => {
    return (
      <div className="gap-10 flex flex-col" key={`${_uid}+${title}`} id={title}>
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
        {isForCard ? (
          <SectionForCards cardsArr={services} />
        ) : (
          <div className="ml-5 flex flex-col gap-4">
            {(services as unknown as Question[]).map(
              ({ Question, Answer }, index) => (
                <ExtendedComponent
                  question={Question}
                  answer={Answer}
                  key={`${Question}+${Answer}+${index}`}
                />
              )
            )}
          </div>
        )}
      </div>
    );
  });

  const Placeholder = isForCard ? (
    <SectionForCards cardsArr={[cardHolder]} />
  ) : (
    <div className="ml-5 flex flex-col gap-4">
      <ExtendedComponent
        question={'Завантаження...'}
        answer={'Завантаження...'}
      />
    </div>
  );

  return arr.length > 0 ? normalComponentListing : Placeholder;
}

export default SectionWithName;
