export type CardType = {
  _uid: string;
  Image: { filename: string };
  Name: string;
  Days: string;
  Price: string;
  url?: string;
};

function Card({ card }: { card: CardType }) {
  const {
    Image: { filename },
    Name,
    Days,
    Price,
    url = '',
  } = card;
  return (
    // <Link href={url}>
    <section className='bg-secondColor flex flex-col sm:flex-row items-center justify-between p-3 gap-4 sm:p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow border-[1px] border-cardSecondColor w-full'>
      <h2 className='text-[14px] sm:text-[16px] lg:text-[18px] basis-1/2'>
        {Name}
      </h2>
      <p className='hidden sm:block basis-1/12 text-center'>
        {Days !== 'Loading...' ? `${Days} дн.` : Days}
      </p>
      <p className='hidden sm:block basis-1/4 text-center py-1 px-3 bg-cardSecondColor text-white font-bold rounded-md'>
        {Price !== 'Loading...' ? `${Price} ₴` : Price}
      </p>
      <div className='sm:hidden flex flex-row justify-between w-full'>
        <p className=' basis-1/2 ssm:basis-1/3 text-center'>
          {Days !== 'Loading...' ? `${Days} дн.` : Days}
        </p>
        <p className=' basis-1/2 ssm:basis-1/3 text-center py-1 px-3 bg-cardSecondColor text-white font-bold rounded-md'>
          {Price !== 'Loading...' ? `${Price} ₴` : Price}
        </p>
      </div>
      {/* <div className='flex flex-col items-center gap-3 '>
          {filename === '' ? (
            <FontAwesomeIcon
              icon={faHeartPulse}
              className='text-[60px] text-cardFirstColor mt-[30px] mb-[20px]'
            />
          ) : (
            <img
            onClick={async()=>console.log( await fetch(filename))}
              src={filename === '' ? standartImg : filename}
              alt='icon'
              className='h-[90px] max-w-[90px] rounded-full my-[10px]'
            />
          )}
        </div> */}
      {/* <div className='flex flex-row justify-between items-center w-full'>
        </div> */}
    </section>
    // </Link>
  );
}

export default Card;
