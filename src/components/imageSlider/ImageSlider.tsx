'use client';
import Link from 'next/link';
import { Change } from '../../variablesToChange';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { imagesForSlider } = Change;
function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <>
      <section className='my-10 max-w-[1000px] mx-auto '>
        <Slider {...settings}>
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
              <div>
                <div
                  className="border-2 border-black border-solid w-[1920px] min-h-[500px] relative bg-cover flex flex-col justify-center items-start p-10 gap-8 text-textWhiteColor"
                  key={id}
                  style={{ backgroundImage: `url(${imgSrc})` }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-blackTransperent z-0" />
                  <div className="flex flex-col gap-3 z-10 relative">
                    <h1 className="text-xl">{title}</h1>
                    <p>{description}</p>
                  </div>

                  <Link
                    href={buttonUrl}
                    className="p-2 bg-bgColor hover:bg-transparent border-2 border-solid rounded-lg transition-colors duration-300 border-bgColor text-textColor hover:text-textWhiteColor z-10"
                  >
                    Дізнатись більше
                  </Link>
                </div>
              </div>
            )
          )}
        </Slider>
      </section>
    </>
  );
}

export default ImageSlider;
