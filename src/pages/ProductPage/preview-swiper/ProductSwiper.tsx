
import React, {  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Thumbs, Keyboard 
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Thumbs,Keyboard ]);

type ProductSwiperPops = {
  photos: string[]
}
const ProductSwiper:React.FC<ProductSwiperPops> = ({photos}) =>{

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

  return (
    <div className='previewWrap'>
      <div className='thumb'>
        
        <Swiper
            keyboard={{ enabled: true }}
            navigation={true}
            onSwiper={setThumbsSwiper} spaceBetween={16} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} direction={"horizontal"}
            className='thumbSwiper'
            breakpoints={
              {
                768: {
                  direction: 'vertical',
                }
              }
            }
        >
        {
          photos.map((url, i) => (
            <SwiperSlide key={`slide-${i}`} >
              <img
                src={url}
                alt={`Slide ${i}`}
              />
            </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
      <div className='preview'>

        <Swiper 
            keyboard={{ enabled: true }}
            loop={true} spaceBetween={0} navigation={true} thumbs={{ swiper: thumbsSwiper }} 
            slidesPerView={1}
            className='previewSwiper' 
            pagination={{
              type: 'bullets',
            }}
            breakpoints={
              {
                768: {
                  pagination: false
                }
              }
            }
        >
        {
          photos.map((url, i) => (
            <SwiperSlide key={`slide-${i}`} >
              <img
                src={url}
                alt={`Slide ${i}`}
              />
            </SwiperSlide>
          ))
        }
        </Swiper>
      </div>
      
    </div>
  )
}

export default ProductSwiper;