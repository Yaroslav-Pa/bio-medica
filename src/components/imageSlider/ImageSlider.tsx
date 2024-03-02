'use client';
import { useRef, useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {getFromApi} from '../../apiGetter'

const storyBlockApi =
  'https://api.storyblok.com/v2/cdn/stories/sliderphotos?cv=1707929168&token=FYShrSsmafxPX5CaF9YMKAtt&version=published';

function ImageSlider() {
  let [imagesForSlider, setImagesForSlider] = useState({Photos:[]});

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const customSlider = useRef();

  useEffect(()=>{getFromApi(storyBlockApi, setImagesForSlider)},[]);

  return (
    <>
      {imagesForSlider.Photos && (
        <section className='mb-10 xl:mt-10 max-w-[1200px] mx-auto relative'>
          <Slider
            {...settings}
            ref={(slider: any) => (customSlider.current = slider)}
          >
            {imagesForSlider.Photos?.map(
              ({ id, filename }: { id: number; filename: string }) => (
                <div key={id}>
                  <div
                    className='rounded-md relative bg-contain xl:bg-cover bg-clip-padding bg-center min-h-[65vw] ssm:min-h-[60vw] xl:min-h-[670px] flex flex-col bg-no-repeat justify-center items-start xl:py-10 text-textWhiteColor'
                    style={{ backgroundImage: `url(${filename})` }}
                  >
                  </div>
                </div>
              )
            )}
          </Slider>
        </section>
      )}
    </>
  );
}

export default ImageSlider;
