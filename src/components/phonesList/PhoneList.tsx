function PhoneList({ phones }: { phones: string[] }) {
  return (
    <>
      {phones.map((phone: string) => (
        <p
          key={phone}
          className="hover:text-hoverColor cursor-pointer first:pb-1"
        >
          {phone}
        </p>
      ))}
    </>
  );
}

export default PhoneList;
