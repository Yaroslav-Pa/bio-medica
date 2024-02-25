import SectionForCards from '../cardsList/CardsList';
import '../layout/header/styles.css';

function SectionWithName({
  arr,
  children,
  isRounded = false,
  isForCard = false,
}: {
  arr: any[];
  children: React.ReactNode;
  isRounded?: boolean;
  isForCard?: boolean;
}) {
  return arr.map(
    ({ nameOfSection, _uid }: { nameOfSection: string; _uid: string }) => {
      return (
        <div className='gap-10 flex flex-col' key={`${_uid}+${nameOfSection}`} id={nameOfSection}>
          <h1
            className={
              'pl-3 text-xl p-2 font-bold ' +
              (isRounded
                ? ' radial-gradient text-white rounded-lg'
                : ' border-b-2')
            }
          >
            {nameOfSection}
          </h1>
          {isForCard ? (
            <SectionForCards gridColumns={4}>{children}</SectionForCards>
          ) : (
            children
          )}
        </div>
      );
    }
  );
}

export default SectionWithName;
