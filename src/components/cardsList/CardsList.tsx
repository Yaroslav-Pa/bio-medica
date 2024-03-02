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
        'grid gap-10 justify-stretch items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ' + (gridColumns>3?'xl:grid-cols-4':'')
      }
    >
      {children}
    </section>
  );
}

export default SectionForCards;
