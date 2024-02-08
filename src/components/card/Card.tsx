import Link from 'next/link';

function Card({
  img,
  title,
  timeInDays,
  price,
  url,
}: {
  img: string;
  title: string;
  timeInDays: number;
  price: number;
  url: string;
}) {
  return (
    <Link href={url}>
      <section className="bg-secondColor flex flex-col items-center justify-between p-8 rounded-md  max-w-[250px] h-[370px] shadow-md hover:shadow-2xl transition-shadow">
        <div className="flex flex-col items-center gap-3">
          <img
            src={img}
            alt="icon"
            className=" h-[100px] max-w-[100px] rounded-full border-2 border-cardImgBorderColor border-solid"
          />
          <h2 className=" text-base text-center">{title}</h2>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-center py-1 px-3 bg-firstColor rounded-md">
            {timeInDays} дн.
          </p>
          <p>{price} грн.</p>
        </div>
      </section>
    </Link>
  );
}

export default Card;
