import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
const standartImg =
  'https://erudyt.org/wp-content/uploads/2018/08/pexels-photo.jpg';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

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
    url = '',
  } = card;
  return (
    <Link href={url}>
      <section className='bg-secondColor flex flex-col items-center justify-between p-5 rounded-lg min-h-[340px] shadow-md hover:shadow-2xl transition-shadow border-[1px] border-cardSecondColor'>
        <div className='flex flex-col items-center gap-3 '>
          {filename !== '' ? (
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
          <h2 className='text-[15px] text-center max-w-[250px]'>{Name}</h2>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <p>
            {Days} дн.
          </p>
          <p className='text-center py-1 px-3 bg-cardSecondColor text-white font-bold rounded-md'>{Price} грн.</p>
        </div>
      </section>
    </Link>
  );
}

export default Card;
