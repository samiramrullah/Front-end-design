import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
              <li className="nav-item active"><a href="Home" className="nav-link">Home</a></li>
              <li className="nav-item"><a href="About" className="nav-link">About</a></li>
              <li className="nav-item"><a href="Services" className="nav-link">Services</a></li>
              
              <li className="nav-item"><a href="Contact Us" className="nav-link">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar