import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';


const ProfileMenu = ({user}) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
      };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        document.addEventListener('click', closeMenu)

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

return (
    <>

    <div id="profile_" onClick={openMenu}>{user.username} <img src="/images/btn_arrow_down_padded.png" alt=''></img></div>
    {showMenu && (
        <>
        <div className='profile_dropdown'>
        <div id='profile'><a id="profile" href={`/users/${user.id}`}>View profile</a></div>
        <div id='logout'><a id="profile" onClick={onLogout} href="/">Logout: {user.username}</a></div>
        </div>
        </>
    )}
    </>
    )
}

export default ProfileMenu;
