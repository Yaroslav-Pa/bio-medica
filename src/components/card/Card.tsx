import Link from 'next/link';
const standartImg =
  'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg';

function Card({
  card,
}: {
  card: {
    Image: { filename: string };
    Name: string;
    Days: string;
    Price: string;
    url?: string;
  };
}) {
  const {
    Image: { filename },
    Name,
    Days,
    Price,
    url='',
  } = card;
  return (
    <Link href={url}>
      <section className='bg-secondColor flex flex-col items-center justify-between p-8 rounded-md  min-w-[270px] min-h-[380px] shadow-md hover:shadow-2xl transition-shadow'>
        <div className='flex flex-col items-center gap-3'>
          <img
            src={filename === '' ? standartImg : filename}
            alt='icon'
            className=' h-[120px] max-w-[120px] rounded-full border-4 border-solid'
          />
          <h2 className=' text-base text-center'>{Name}</h2>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <p className='text-center py-1 px-3 bg-firstColor rounded-md'>
            {Days} дн.
          </p>
          <p>{Price} грн.</p>
        </div>
      </section>
    </Link>
  );
}

export default Card;
