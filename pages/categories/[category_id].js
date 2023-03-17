import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import Link from 'next/link';
import { format } from 'timeago.js';
import Search from '@/components/Search';
import { apiURL } from '@/config/apiURL';

const category = ({catPost}) => { 
  let router = useRouter();
  const [post, setPost] = useState(null)
  let category_id = router?.query?.category_id

  const getPost = async (cid) => {
    const url = `${apiURL}/posts/public/webPosts/?category=${cid}`
    const resultCategories = await ( await axios.get(url)).data;
    setPost(resultCategories)
  }

  useEffect(() => {
    if (router.asPath !== router.route) {
      getPost(category_id)
    }
  }, [router])

  return (
    <div className='single-container'>
      <Search/>
      <div className="category_sidebar">
        <div className="latest">
          <div className="gadget-header">
            <h2>{post?.results[0].category.name}</h2>
          </div>
          <div className="latest-items">
            {
              post?.results?.map((data, i) => (
                <div className="latest-item" key={i}>
                  <div className="latest-image">
                    <img src={data.image} alt=""/>
                  </div>
                  <div className="latest-text">
                    <span className="style">{data.category.name}</span>
                    <Link className='link' href={`/posts/${data.id}`}>{data.title}</Link>
                    <p>{data.summary}</p>
                    <div className="latest-post-owner">
                      <div className="latest-inner">
                        <div className="image">
                          <img src={data.userId.image} alt="" />
                        </div>
                        <div className="latest-text-inner">
                          <p>{data.userId.name}</p>
                          <span>{format(data.createdAt)}</span>
                        </div>
                      </div>
                      <Link className='reading' href={`/posts/${data.id}`}>KEEP READING</Link>
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


export default category
