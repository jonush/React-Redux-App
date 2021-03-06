import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/spacex-logo.svg';

const Navbar = () => {
  return (
    <nav>
        <div>
          <NavLink className='links' to='/'>
              <img className='logo' src={logo} />
          </NavLink>
        </div>
        
        <div className='links'>
          <NavLink to='/info'>Origins</NavLink>
          <NavLink to='/news'>News</NavLink>
          <NavLink to='/missions'>Missions</NavLink>
          <NavLink to='/rockets'>Rockets</NavLink>
        </div>
    </nav>
  )
}

export default Navbar;