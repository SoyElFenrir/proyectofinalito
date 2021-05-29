import React from 'react';
import {Link, NavLink} from 'react-router-dom';

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
            <Link to='/'> <img href='https://http2.mlstatic.com/D_NQ_NP_2X_684964-MLA44135654663_112020-F' alt="logo" /> </Link>
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