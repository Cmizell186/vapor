import React from 'react';
import ProfileMenu from '../components/Profile/ProfileMenu'
import '../../src/components/LandingPage/index.css'

const NavBar = ({user}) => {
  console.log(user)
  return (
    <div className='splashWrapper'>
      <div id="nav">
        <div id="navarea">
        <div id="div_logo"><img src="/images/vapor_logo.png" id="logo"></img></div>
        <div id="navbar">
                <div className="nav_nav" id="nav_store"><a className='nav_links' href='/games'>STORE</a></div>
                <div className="nav_nav" id="nav_library"><a className='nav_links' href='/games'>LIBRARY</a></div>
                <div className="nav_nav" id="nav_profile"><a className='nav_links' href={`/users/${user.id}`}>PROFILE</a></div>
                <div className="nav_nav" id="nav_about"><a className='nav_links' href='/games'>ABOUT</a></div>
          </div>
          {user ? <div id="loginnav"><ProfileMenu user={user} /><div id='profile_image'><img src={user.profile_picture} id="profile_pic" alt=""></img></div></div> :
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
