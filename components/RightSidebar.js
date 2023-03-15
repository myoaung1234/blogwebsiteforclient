import React from 'react'

const RightSidebar = () => {
  return (
    
    <div className="right">
            <div className="picked-item">
                <div className="right-header">
                    <h3>Picked</h3>
                    {
                    !toggleCat ?
                    <span 
                        onClick={() => {
                        setPickedId(category?.results[1].id);
                        setToggleCat(prev => !prev)
                    }}>{category?.results[1].name}<i className="bi bi-arrow-right"></i></span> :
                    <span 
                        onClick={() => {
                        setPickedId(category?.results[2].id);
                        setToggleCat(prev => !prev)
                    }}>{category?.results[2].name}<i className="bi bi-arrow-right"></i></span>
                    }
                </div>
                {
                    (pickLoading) ?
                    <div className='loading' style={{opacity: 0.8}}>
                    <img src="1488.gif" alt="" />
                    </div>
                    :
                    <div className='loading' style={{opacity: 0, zIndex: -999}}>
                    <img src="1488.gif" alt="" />
                    </div>
                }
                {
                    pickedPost?.results.slice(0, 3).map((data, i) => (
                    <div className="right-picked-item" key={i}>
                        <div className="image">
                        <img src={data.image} alt=""/>
                        </div>
                        <div className="text-right">
                        <Link href={`/posts/${data.id}`}>{data.title}</Link>
                        <span>{format(data.createdAt)}</span>
                        </div>
                    </div>
                    ))
                }
            </div>
        
            <div className="label-items">
                <p>Labels</p>
                {
                    category?.results?.map((data, i) => (
                    <div className="label-item" key={i}>
                        <img src={posts?.results[i].image} alt=""/>
                        <div className="background"></div>
                        <div className="label-inner">
                        <h2><Link href={`/categories/${data.id}`} style={{color: "#fff"}}>{data.name}</Link></h2>
                        <span>{data.numberOfPosts}</span>
                        </div>
                    </div>
                    ))
                }
            </div>

            <div className="gadget-items">
            <div className="gadget-header">
                <p>{category?.results[1].name}</p>
                <span>View All</span>
            </div>

            {
                gadgetPosts?.results?.map((data, i) => (
                <div className="gadget-item" key={i}>
                    <p>0{i + 1}</p>
                    <div className="gadget-inner">
                    <Link href={`/posts/${data.id}`}>{data.title}</Link>
                    <span>{data.userId.name}<p>.</p>{format(data.createdAt)}</span>
                    </div>
                </div>
                ))
            }
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
            <div className='quotes_text'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                    delay: 3000
                    }}
                >
                    {
                    quotess?.results?.map((data, i) => (
                        <SwiperSlide key={i}>
                        <div className="quotes">
                            <p>Quotes</p>
                            <div className="quotes-inner">
                            <i className="bi bi-quote"></i>
                            <p>{data.quotes}</p>
                            </div>
                            <span >{data.quoteser}</span>
                            {/* <div className='desc'>
                            <div dangerouslySetInnerHTML={data.quoteser}/>
                            </div> */}
                            <div className="line"></div>
                        </div>
                        </SwiperSlide>
                    ))
                }
                </Swiper>
            </div>
            
            <div className="living-header">
            <h3>{livingPosts?.results[0].category.name}</h3>
            <a href="#">View All</a>
            </div>
            <div className="living">
            <div className="living-image">
                <img src={livingPosts?.results[0].image} alt=""/>
            </div>
            <div className="background"></div>
            <div className="picked-inner">
                <span>{livingPosts?.results[0].category.name}</span>
                <Link href={`/posts/${livingPosts?.results[0].id}`}>{livingPosts?.results[0].title}</Link>
                <div className="picked-inner-text">
                <p>{livingPosts?.results[0].userId.name}<span>{format(livingPosts?.results[0].createdAt)}</span></p>
                </div>
            </div>
            </div>

            <div className="picked-item">
            {
                livingPosts?.results.slice(0, 2).map((data, i) => (
                <div className="right-picked-item" key={i}>
                    <div className="image">
                    <img src={data.image} alt=""/>
                    </div>
                    <div className="text-right">
                    <Link href={`/posts/${data.id}`}>{data.title}</Link>
                    <span>{format(data.createdAt)}</span>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    
  )
}

export default RightSidebar