import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Keyboard 
} from 'swiper/core';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import "swiper/components/pagination/pagination.min.css";
import './swiperLinks.scss'


import { Path } from "src/utils/path";
import { Link } from "react-router-dom";
import { IProduct } from "src/typings/product";
import { TextLimit } from "src/utils/textLimit";

// install Swiper modules
SwiperCore.use([Navigation, Keyboard ]);

interface ISwiperProps {
    title: string
    products: IProduct[]
    key: string | number
}
const SwiperLinks:React.FC<ISwiperProps> = ({title, products, key}) =>{
 
  return (
    <li key={key} className='list_swiper'>
      <h2 className='list_swiper__title'>{title}</h2>
        <Swiper
            keyboard={{ enabled: true }}
            navigation={true}
            slidesPerView={3}
            spaceBetween={30}
        >
        {
          products.map((product) => (
            <SwiperSlide key={product.id} >
                <Link className='link' to={`${Path.PRODUCTS}${product.id}`}>
                    <img className='img' src={product.image} alt={product.title} />
                    <div className='info'>
                      <h3 className='subtitle'>{TextLimit(product.title, 30)}</h3>
                      <p className='price'>{product.price}</p>
                    </div>
                </Link>
            </SwiperSlide>
          ))
        }
        </Swiper>
  
    </li>
  )
}

export default SwiperLinks;
