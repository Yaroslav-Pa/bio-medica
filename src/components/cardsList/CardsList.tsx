function SectionForCards({
  children
}: {
  children: React.ReactNode;
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
