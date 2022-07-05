import React from 'react'
import Navbar from './Navbar/Navbar'
const HomeWrapper = ({children}) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default HomeWrapper