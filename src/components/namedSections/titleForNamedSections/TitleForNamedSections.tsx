function TitleForNamedSections({
  isRounded,
  title,
}: {
  isRounded: boolean;
  title: string;
}) {
  return (
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
  );
}

export default TitleForNamedSections;
