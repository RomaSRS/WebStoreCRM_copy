
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Keyboard 
} from 'swiper/core';


import { data } from "src/utils/mok.data";
import ProductItem from "src/components/ProductItem";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard ]);


const ListSwiper:React.FC = () =>{
  const {products} = data
 
  
  return (
    <div className='list'>
      <h2 className='list__title'>RELATED PRODUCTS</h2>
      <Swiper
          keyboard={{ enabled: true }}
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
              type: 'bullets',
          }}
          breakpoints={
              {
                  600: {
                      slidesPerView: 2,
                  },
                  900: {slidesPerView: 3 },
                  1100: {
                      slidesPerView: 4,
                      pagination: false 
                  },
              }
          }
      >
      {
        products.map((product, i) => (
          <SwiperSlide key={`product-${i}`} >
            <ProductItem product={product}/>
          </SwiperSlide>
        ))
      }
      </Swiper>
  
      
    </div>
  )
}

export default ListSwiper;