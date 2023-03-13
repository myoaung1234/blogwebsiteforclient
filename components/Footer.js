import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer">
          <div className="footer-left">
            <img src="tc4.png" alt=""/>
            <div className="connect">
              <i className="bi bi-telephone-fill"></i>
              <p>+959 953 860 385</p>
            </div>
            <div className="connect">
              <i className="bi bi-envelope-at-fill"></i>
              <p>myoaung.dev@gmail.com</p>
            </div>
          </div>
          <div className="center">
            <h3>Popular</h3>
            <div className="popular">
              <div className="image">
                <img src="https://images.pexels.com/photos/13425866/pexels-photo-13425866.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""/>
              </div>
              <div className="popular-text">
                <a href="/posts/post">Lorem ipsum dolor sit amet consectetur adipisicing</a>
                <span>5 MONTHS AGO</span>
              </div>
            </div>
            <div className="popular">
              <div className="image">
                <img src="https://images.pexels.com/photos/13871932/pexels-photo-13871932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
              </div>
              <div className="popular-text">
                <a href="/posts/post">Lorem ipsum dolor sit amet consectetur adipisicing</a>
                <span>5 MONTHS AGO</span>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <h3>Pages</h3>
            <a href="/">Home</a>
            <a href="#">Sitemap</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
    </>
  )
}

export default Footer
