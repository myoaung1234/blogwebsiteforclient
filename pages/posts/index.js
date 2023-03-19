import Search from '@/components/Search';
import { apiURL } from '@/config/apiURL';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js';

const index = () => {
  const [latestPosts, setLatestPosts] = useState();
  let [addIndex, setAddIndex] = useState(4);

  const getPosts = async () => {
    let latesturl = `${apiURL}/posts/public/webPosts/?sortBy=_id:desc&page=1&limit=${addIndex}`
    const latestPost = await ( await axios.get(latesturl)).data
    setLatestPosts(latestPost);
  }

  const handleMore = () => {
    setAddIndex(next => next + 4)
  }

  useEffect(() => {
    getPosts()
  }, [addIndex])

  return (
    <div className='single-container'>
      <Search post={latestPosts}/>
      <div className="category_sidebar">
        <div className="latest">
          <div className="gadget-header">
            <h2>Latest Posts</h2>
            <span><p>{latestPosts?.totalResults}</p>Posts</span>
          </div>
          <div className="latest-items">
            {
              latestPosts?.results?.map((data, i) => (
                <div className="latest-item" key={i}>
                  <div className="latest-image">
                    <img src={data.image} alt=""/>
                  </div>
                  <div className="latest-text">
                    <Link href={`/categories/${data.category.id}`} className={data.category.name}>{data.category.name}</Link>
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
          {
            (addIndex >= latestPosts?.totalResults) ?
            <button className='btn'>That's All</button> :
            <button onClick={handleMore} className='btn read-more'>Read More</button>
          }
        </div>
      </div>
    </div>
  )
}

export default index