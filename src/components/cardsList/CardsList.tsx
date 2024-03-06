function SectionForCards({
  children,
  gridColumns = 3,
}: {
  children: React.ReactNode;
  gridColumns?: number;
}) {
  return (
    <section
      className={
        'flex flex-col gap-5 justify-stretch items-stretch'
      }
    >
      {children}
    </section>
  );
}

export default SectionForCards;
