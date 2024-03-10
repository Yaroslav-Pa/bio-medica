export type CardType = {
  _uid: string;
  Image: { filename: string };
  Name: string;
  Days: string;
  Price: string;
  url?: string;
};
import { Change } from '@/variablesToChange';
const { cardHolder } = Change;

function Card({ card }: { card: CardType }) {
  const {
    Image: { filename },
    Name,
    Days,
    Price,
    url = '',
  } = card;
  return (
    <section className='bg-secondColor flex flex-col sm:flex-row items-center justify-between p-3 gap-4 sm:p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow border-[1px] border-cardSecondColor w-full'>
      <h2 className='text-[14px] sm:text-[16px] lg:text-[18px] basis-1/2'>
        {Name}
      </h2>
      <p className='hidden sm:block basis-1/12 text-center'>
        {Days !== cardHolder.Days ? `${Days} дн.` : Days}
      </p>
      <p className='hidden sm:block basis-1/4 text-center py-1 px-3 bg-cardSecondColor text-white font-bold rounded-md'>
        {Price !== cardHolder.Price ? `${Price} ₴` : Price}
      </p>
      <div className='sm:hidden flex flex-row justify-between w-full'>
        <p className=' basis-1/2 ssm:basis-1/3 text-center'>
          {Days !== cardHolder.Days ? `${Days} дн.` : Days}
        </p>
        <p className=' basis-1/2 ssm:basis-1/3 text-center py-1 px-3 bg-cardSecondColor text-white font-bold rounded-md'>
          {Price !== cardHolder.Price  ? `${Price} ₴` : Price}
        </p>
      </div>
    </section>
  );
}

export default Card;
