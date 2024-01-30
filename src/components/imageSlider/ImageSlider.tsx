'use client';
import Link from 'next/link';
import { Change } from '../../variablesToChange';
const { imagesForSlider } = Change;
function ImageSlider() {
  return (
    <>
      <section className="flex justify-center snap-mandatory scroll-smooth snap-x overflow-x-scroll">
        {imagesForSlider.map(
          ({
            id,
            title,
            description,
            buttonUrl,
            imgSrc,
          }: {
            id: number;
            title: string;
            description: string;
            buttonUrl: string;
            imgSrc: string;
          }) => (
            <div
              className={
                'snap-center border-2 border-black border-solid w-[1920px] min-h-[500px] relative bg-cover flex flex-col justify-center items-start p-10 gap-8 text-textWhiteColor'
              }
              key={id}
              style={{ backgroundImage: `url(${imgSrc})` }}
            >
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-blackTransperent -z-0" />
              <div className="flex flex-col z-0 gap-3">
                <h1 className='text-xl'>{title}</h1>
                <p>{description}</p>
              </div>

              <Link href={buttonUrl} className="z-0 p-2 bg-bgColor hover:bg-transparent border-2 border-solid rounded-lg transition-colors duration-300 border-bgColor text-textColor hover:text-textWhiteColor">
                Дізнатись більше
              </Link>
            </div>
          )
        )}
      </section>
    </>
  );
}

export default ImageSlider;
