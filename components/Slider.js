import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { format } from 'timeago.js'
import Link from 'next/link';

const Slider = () => {
  SwiperCore.use([Autoplay])
  const [posts, setPosts] = useState()
  

  const getPosts = async () => {
    let url = `http://localhost:5000/v1/posts/public/webPosts/?sortBy=createdAt:desc`
    const resultPost = await ( await axios.get(url)).data
    setPosts(resultPost);
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <>
        <div className="slider-container">
          <Swiper
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 4000
            }}
            breakpoints={{
              340: {
                slidesPerView: 1
              },
              620: {
                slidesPerView: 2
              },
              975: {
                slidesPerView: 3
              }
            }}
          >
            {
              posts?.results?.map((data, i) => (
                <SwiperSlide key={i}>
                  <div className="slider">
                    <div className="slider-image">
                      <div className="slider-image-wrapper">
                        <img src={data.image} alt=""/>
                      </div>
                    </div>
                    <div className="slider-title">
                      <Link href={`/posts/${data.id}`}>{(data.title).slice(0,40)}...</Link>
                      <span>{format(data.createdAt)}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
    </>
  )
}

export default Slider
