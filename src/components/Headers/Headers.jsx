import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import banner from '../../images/banner_header.jpg'

const style = {
  color:'grey',
  backgroundColor:'Black'
}

const Header = (props) => {
  return(
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'> <img src={banner} alt="logo" /> </Link>
          </li>
          <li>
            <NavLink to='/publications' activeStyle={style}>Publications</NavLink>
          </li>
          <li>
            <NavLink to='/ussers' activeStyle={style}>Ussers</NavLink>
          </li>
          <li>
            <NavLink to='/login' activeStyle={style}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header