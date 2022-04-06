import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'

function Layout({ children }) {
  return (
    <Fragment>
      <div className='layout'>
      <Navbar />
      {children}
      <Footer/>
      </div>
    </Fragment>
  )
}

export default Layout