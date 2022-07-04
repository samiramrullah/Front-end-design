import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar bg-dark navbar-light " id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">JOJO<span>Rs</span></a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="nav"  >
            <ul className="navbar-nav ms-autos">
            <li className="nav-item active"><NavLink to={'/'} className="nav-link">Home</NavLink></li>
            <li className="nav-item active"><NavLink to={'/signup'} className="nav-link">Sign up</NavLink></li>
            <li className="nav-item active"><NavLink to={'/login'} className="nav-link">Login</NavLink></li>
            <li className="nav-item active"><NavLink to={'/contact'} className="nav-link">Contact</NavLink></li>
            <li className="nav-item active"><NavLink to={'/about'} className="nav-link">About</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;