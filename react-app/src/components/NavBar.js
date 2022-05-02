import React from 'react';
import LogoutButton from './auth/LogoutButton';

const NavBar = ({user}) => {
  return (
    <div className='splashWrapper'>
      <div id="nav">
        <div id="navarea">
        <div id="div_logo"><img src="/images/vapor_logo.png" id="logo"></img></div>
        <div id="navbar">
                <div className="nav_nav" id="nav_store">STORE</div>
                <div className="nav_nav" id="nav_library">LIBRARY</div>
                <div className="nav_nav" id="nav_profile">PROFILE</div>
                <div className="nav_nav" id="nav_about">ABOUT</div>
          </div>
          {user ? <div id="loginnav"> {user.username} <LogoutButton /> </div> :
          <div id="loginnav">Login | <a href="/demo" id="demo_login">Demo</a></div>}
        </div>
      </div>
    </div>
  );
}

export default NavBar;


{/* <nav>
<ul>
  <li>
    <NavLink to='/' exact={true} activeClassName='active'>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to='/login' exact={true} activeClassName='active'>
      Login
    </NavLink>
  </li>
  <li>
    <NavLink to='/sign-up' exact={true} activeClassName='active'>
      Sign Up
    </NavLink>
  </li>
  <li>
    <NavLink to='/users' exact={true} activeClassName='active'>
      Users
    </NavLink>
  </li>
  <li>
    {user.username} <LogoutButton />
  </li>
</ul>
</nav> */}
