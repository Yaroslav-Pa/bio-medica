import Link from 'next/link';

function Certificate({
  img,
  title,
  url,
}: {
  img: string;
  title: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      className="bg-secondColor flex flex-col items-center gap-3 h-[100%] p-2 rounded-lg shadow-md hover:shadow-2xl transition-shadow"
    >
      <img
        src={img}
        alt="icon"
        className=" w-[100%] h-[auto] border-cardImgBorderColor border-solid"
      />
      <h2 className="text-base text-center pt-2 pb-2">{title}</h2>
    </Link>
  );
}

export default Certificate;
