import React, {useEffect, useState} from 'react';
import ProfileMenu from '../components/Profile/ProfileMenu'
import '../../src/components/LandingPage/index.css'
import {get_one_image} from '../store/image';
import {useDispatch, useSelector} from 'react-redux'


const NavBar = ({user}) => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };
  const dispatch = useDispatch()
  const userImage = useSelector(state => Object.values(state.images))
  const pfp = userImage[0];

  useEffect(() =>{
    dispatch(get_one_image(user?.id))
  }, [dispatch])

  return (
    <div className='splashWrapper'>
      <div id="nav">
        <div id="navarea">
        <div id="div_logo"><img src="/static/images/vapor_title_logo.png" id="logo" alt=""></img></div>
        <div id="navbar">
                <div className="nav_nav" id="nav_store"><a className='nav_links' href='/games'>STORE</a></div>
                <div className="nav_nav" id="nav_library"><a className='nav_links' href='/library'>LIBRARY</a></div>
                {user ? <div className="nav_nav" id="nav_profile"><a className='nav_links' href={`/users/${user.id}`}>PROFILE</a></div> :
                <></>}
                <div className="nav_nav" id="nav_library"><a className='nav_links' href='/games/new'>Vaporworks</a></div>
                <div className="nav_nav" id="nav_about"><a className='nav_links' href='/about'>ABOUT</a></div>
          </div>
          {user ? <div id="loginnav"><ProfileMenu user={user} /><div id='profile_image'><img src={pfp?.image} id="profile_pic" alt=""></img></div></div> :
          <div id="loginnav"><a href="/" className="demo_login">login |</a><a href="/demo" className="demo_login">demo</a></div>}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
