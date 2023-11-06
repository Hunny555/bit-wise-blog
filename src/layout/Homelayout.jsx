import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../commponent/Header'
import Footer from '../commponent/Footer'

const Homelayout = () => {
  return (
    <div>
    <Header/>
    <Outlet/>
    <div className='my-2'>

    <Footer/>
    </div>
    </div>
  )
}

export default Homelayout;