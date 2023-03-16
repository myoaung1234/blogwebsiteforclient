import Link from 'next/link';
import React from 'react';


const Header = ({ setSearch }) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let dateObj = new Date();
  let month = monthNames[dateObj.getUTCMonth()]; 
  let day = dateObj.getUTCDate()
  let year = dateObj.getUTCFullYear();
  return (
    <>
      <div className="header">
          <div className="header-left">
            <div className="logo">
              <img src="paparazzi.png" alt=""/>
              <h2>PAPARAZZI</h2>
            </div>
            <Link href="/" className='link'>Home</Link>
          </div>
          <div className="header-right">
            <div className="search">
              <input type="search" placeholder='Search...' onChange={e => setSearch(e.target.value)} />
              <i className="bi bi-search"></i>
            </div>
            <div className="date">
              <div className="day"><p>{day}</p></div>
              <div className="month-year">
                  <p>{month}</p>
                  <p>{year}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header
