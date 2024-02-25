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
        'grid gap-10 justify-stretch items-stretch ' + ` grid-cols-${gridColumns}`
      }
    >
      {children}
    </section>
  );
}

export default SectionForCards;
