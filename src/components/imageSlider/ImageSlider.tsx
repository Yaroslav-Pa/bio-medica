'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Change } from '../../variablesToChange';
import axios from 'axios';
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

  useState(()=>{getFromApi(storyBlockApi, setImagesForSlider)},[]);

  return (
    <>
      {imagesForSlider.Photos && (
        <section className='my-10 max-w-[1200px] mx-auto relative'>
          <Slider
            {...settings}
            ref={(slider: any) => (customSlider.current = slider)}
          >
            {imagesForSlider.Photos?.map(
              ({ id, filename }: { id: number; filename: string }) => (
                <div key={id}>
                  <div
                    className='rounded-md relative bg-cover bg-clip-padding bg-center min-h-[670px] flex flex-col bg-no-repeat justify-center items-start p-10 gap-8 text-textWhiteColor'
                    style={{ backgroundImage: `url(${filename})` }}
                  >
                    {/* <div className='absolute top-0 bottom-0 left-0 right-0 bg-blackTransperent z-0 rounded-md' />
                  <div className='flex flex-col gap-3 z-10 relative'>
                    <h1 className='text-xl'>{title}</h1>
                    <p>{description}</p>
                  </div>

                  <Link
                    href={buttonUrl}
                    className='p-2 bg-bgColor hover:bg-transparent border-2 border-solid rounded-lg transition-colors duration-300 border-bgColor text-textColor hover:text-textWhiteColor z-10'
                  >
                    Дізнатись більше
                  </Link> */}
                  </div>
                </div>
              )
            )}
          </Slider>
          {/* TODO вирішити чи оставляти, якщо так = переробити у компоненти й не зроз що тут хоче ts */}
          {/* <button className='absolute py-2 px-1 rounded-md top-1/2 right-2 bg-bgColor text-textColor' onClick={()=>{customSlider.current.slickNext()}}>
          {'>'}
        </button>
        <button className='absolute py-2 px-1 rounded-md top-1/2 left-2 bg-bgColor text-textColor' onClick={()=>{customSlider.current.slickPrev()}}>
          {'<'}
        </button> */}
        </section>
      )}
    </>
  );
}

export default ImageSlider;
