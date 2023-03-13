import axios from 'axios'
import Link from 'next/link';
import React from 'react'
import { format } from 'timeago.js'

const Posts = ({gadget}) => {
  
  return (
    <>
      <div className="posts-container">
          <div className="post-header">
              <h3>{gadget?.results[0].category.name}</h3>
              <Link className='view-all' href={`/categories/${gadget?.results[0].category.id}`}>View All</Link>
          </div>
          <div className="post-container">
            {
              gadget?.results?.map((data, i) => (
                <div className="post-item" key={i}>
                  <div className="post-image">
                    <img src={data.image} alt=""/>
                  </div>
                  <div className="background"></div>
                  <div className="post-inner">
                    <Link href={`/categories/${data.category.id}`} style={{textDecoration: 'none'}}>
                      <span className={data.category.name}>{data.category.name}</span>
                    </Link>
                    <Link className='link' href={`/posts/${data.id}`}><h3>{data.title}</h3></Link>
                    <div className="post-inner-text">
                      <p>{data.userId.name}<span>{format(data.createdAt)}</span></p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}

export default Posts
