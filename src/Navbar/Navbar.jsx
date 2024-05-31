import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 ubuntu text">
  <div className="container-fluid">
    <Link to="/" className='fs-3 ubuntu navbar-brand'>
      Rick&Morty
       
    </Link> <span className="text-primary">Wiki</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active text-primary  ">Characters</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="episodes" className="nav-link text-primary" >Episode</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="location" className="nav-link text-primary" >Location</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar