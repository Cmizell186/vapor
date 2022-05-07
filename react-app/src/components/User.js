import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UploadPicture from './Images';
import './User.css'

function User({users}) {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <>
      <div className='user-background-page'>
        <img className='user-background-page' src='https://vaporgames.s3.us-west-1.amazonaws.com/steam-background.jpg'/>
      </div>
      <div className='user-info-area-container'>
        <div>
          <strong>{user.username}</strong>
          {users.id === +userId ?
          <div>
            <UploadPicture />
          </div>
          :

          <></>}
        </div>
      </div>
    </>
  );
}
export default User;
