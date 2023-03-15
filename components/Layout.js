import React, { useState, createContext } from 'react'
import Header from './Header'

export const LayoutContext = createContext(null)


const Layout = ({ children }) => {
  let [search, setSearch] = useState('')

  return (
    <LayoutContext.Provider value={{search}}>
      <div className='main-container'>
        <Header setSearch={setSearch} />
        <main>
            {children}
        </main>
        {/* <Footer /> */}
        <div className="sub-footer">
          <p>Developed by Myo Aung @ 2023</p>
          <span>
            <a href="https://www.linkedin.com/in/myo-aung-2a374823b/"><i className="bi bi-linkedin"></i></a>
            <a href="https://github.com/myoaung1234"><i className="bi bi-github"></i></a>
          </span>
        </div>
      </div>
    </LayoutContext.Provider>
   
  )
}

export default Layout