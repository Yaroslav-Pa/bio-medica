import SectionForCards from '../cardsList/CardsList';
import '../layout/header/styles.css'

function SectionWithName({
  arr,
  isRounded = false,
  children,
}: {
  arr: any[];
  children: React.ReactNode;
  isRounded?: boolean;
}) {
  return arr.map(
    ({ nameOfSection, _uid }: { nameOfSection: string; _uid: string }) => (
      <div className='gap-10 flex flex-col' key={`${_uid}+${nameOfSection}`}>
        <h1 className='pl-3  rounded-lg text-xl p-2 font-semibold radial-gradient text-white'>
          {nameOfSection}
        </h1>
        <SectionForCards gridColumns={4}>{children}</SectionForCards>
      </div>
    )
  );
}

export default SectionWithName;
