import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import { format } from 'timeago.js';
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/components/Search';
import { Swiper, SwiperSlide } from 'swiper/react';

const post = () => {
  const router = useRouter();
  const [post, setPost] = useState();
  const [catPost, setCatPost] = useState();
  const [popularPosts, setPopularPosts] = useState();
  const [quotess, setQuotess] = useState();
  const [loading, setLoading] = useState()

  let id = router.query.post_id
  const getPost = async (cid) => {
    setLoading(true)
    const url = `http://localhost:5000/v1/posts/public/single/${cid}`;
    const getData = await ( await axios.get(url)).data;
    setPost(getData)
    const urlcat = `http://localhost:5000/v1/posts/public/webPosts/?page=1&limit=4&category=${getData?.category.id}`
    const resultPost = await ( await axios.get(urlcat)).data
    setCatPost(resultPost)
    let popularurl = `http://localhost:5000/v1/posts/public/webPosts?sortBy=viewCount:desc&page=1&limit=5`
    const popularPost = await ( await axios.get(popularurl)).data
    setPopularPosts(popularPost);
    setLoading(false)
  }

 
  
  useEffect(() => {
    if (router.asPath !== router.route) {
      getPost(id)
    }
   
  }, [router])

  return (
      <div className='single-container'>
        <Search post={popularPosts}/>
        <div className="posts_container">
          <div className="hero-section">
            <div className="hero-posts">
              <div className="hero-image">
                <img src={post?.image} alt=""/>
              </div>
              <div className="background"></div>
              <div className="hero-text">
                <p>
                  <Link href="/">Home</Link>
                  <i className="bi bi-caret-right-fill"></i>
                  <Link href={`/categories/${post?.category.id}`}>{post?.category.name}</Link>
                </p>
                <h3>{post?.title}</h3>
                
                <div className="hero-poster">
                  <div className="image">
                    <img src={post?.userId.image} alt=""/>
                  </div>
                  <div className="poster-text">
                    <h3>{post?.userId.name}</h3>
                    <span><p>{post?.viewCount} Views</p>{format(post?.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-post-text">
              <div dangerouslySetInnerHTML={{__html: post?.desc}}></div>
            </div>
            <div className="poster-info">
                <div className="hero-poster">
                  <div className="image">
                    <img src={post?.userId.image} alt=""/>
                  </div>
                  <div className="poster_text">
                    <span>POSTED-BY</span>
                    <h2>{post?.userId.name}</h2>
                  </div>
                </div>
                
            </div>
            <div className="related-posts">
              <div className="gadget-header">
                <p>Related</p>
                <Link className='view-all' href={`/categories/${catPost?.results[0].category.id}`}>View All</Link>
              </div>
              <div className="living-items">
                {
                  catPost?.results?.map((data, i) => (
                    <div className="living-item" key={i}>
                      <div className="living-image">
                        <img src={data.image} alt=""/>
                      </div>
                      <Link className='cate' href={`/categories/${data.category.id}`}>{data.category.name}</Link>
                      <div className="living-text">
                        <Link className='link' href={`/posts/${data.id}`}>{(data.title).slice(0,70)}...</Link>
                        <span><p>{data.userId.name}</p>{format(data.createdAt)}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="social-join-us">
                <p>Join us</p>
                <div className="join-us">
                    <div className="social-item">
                    <i className="bi bi-facebook"></i>
                    <div className="social-text">
                        <p>facebook</p>
                        <span className="facebook">200k</span>
                    </div>
                    </div>

                    <div className="social-item">
                    <i className="bi bi-twitter"></i>
                    <div className="social-text">
                        <p>twitter</p>
                        <span className="twitter">50k</span>
                    </div>
                    </div>

                    <div className="social-item">
                    <i className="bi bi-twitch"></i>
                    <div className="social-text">
                        <p>twitch</p>
                        <span className="twitch">564</span>
                    </div>
                    </div>

                    <div className="social-item">
                    <i className="bi bi-instagram"></i>
                    <div className="social-text">
                        <p>instagram</p>
                        <span className="instagram">1m</span>
                    </div>
                    </div>
                </div>
            </div>
            
          </div>
          <div className="posts_sidebar">
            <div className="picked-item">
                <div className="right-header">
                  <h3>POPULAR</h3>
                  <span>View All</span>
                </div> 
                  
                {
                  popularPosts?.results?.map((data, i) => (
                    <div className="right-picked-item" key={i}>
                      <div className="image">
                        <img src={data.image} alt=""/>
                      </div>
                      <div className="text-right">
                        <Link className='link' href={`/posts/${data.id}`}>{(data.title).slice(0, 50)}...</Link>
                        <div className="view">
                          <span style={{color: 'blue'}}>{data.viewCount} views</span>
                          <span>{format(data.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
                  
              </div>
          </div>
        </div>
      </div>
  )
}

export default post