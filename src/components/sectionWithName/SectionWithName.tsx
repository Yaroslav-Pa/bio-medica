function SectionWithName({
  arr = [],
  isRounded = false,
  children,
}: {
  arr: any[];
  children: React.ReactNode;
  isRounded?: boolean;
}) {
  return arr.map(({ nameOfSection }: { nameOfSection: string }) => (
    <div className='gap-10 flex flex-col'>
      <h1 className='pl-3 border-b-2 text-xl font-semibold'>{nameOfSection}</h1>
      {children}
    </div>
  ));
}

export default SectionWithName;
