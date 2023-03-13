import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';


const MiniSlider = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="swiper">
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000
      }}
      className='swiper'
    >
      <SwiperSlide>
        <div className="mini-title">
         <div className="title mySlides">
               <a href="#" className='cate'>STYLE</a>
               <div className="image">
               <img src='https://images.pexels.com/photos/12349053/pexels-photo-12349053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=""/>
               </div>
              <a href="/posts/post">Lorem ipsum dolor. Assumenda animi quos deb sapiente saepe expedita. Molestias, rerum.</a>
           </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mini-title">
         <div className="title mySlides">
               <a href="#" className='cate'>GADGET</a>
               <div className="image">
               <img src='https://images.pexels.com/photos/12349053/pexels-photo-12349053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=""/>
               </div>
              <a href="/posts/post">Lorem ipsum dolor. Assumenda animi quos deb sapiente saepe expedita. Molestias, rerum.</a>
           </div>
       </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mini-title">
         <div className="title mySlides">
               <a href="#" className='cate'>LIVING</a>
               <div className="image">
               <img src='https://images.pexels.com/photos/12349053/pexels-photo-12349053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=""/>
               </div>
              <a href="/posts/post">Lorem ipsum dolor. Assumenda animi quos deb sapiente saepe expedita. Molestias, rerum.</a>
           </div>
       </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
    
}

export default MiniSlider