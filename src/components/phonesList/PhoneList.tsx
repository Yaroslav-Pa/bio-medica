function PhoneList({ phones }: { phones: string[] }) {
  return (
    <>
      {phones.map((phone: string) => (
        <p
          key={phone}
          className="hover:text-orangeMax transition-colors duration-200 cursor-pointer"
        >
          {phone}
        </p>
      ))}
    </>
  );
}

export default PhoneList;
