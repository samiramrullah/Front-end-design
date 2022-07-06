import React from 'react'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
const HomeWrapper = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default HomeWrapper