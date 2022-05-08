import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useParams } from 'react-router-dom';
import UploadPicture from './Images';
import SingleImage from './Images/UserImage';
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
    <div id='user-info-area-container'>
      <video autoPlay muted loop id="user-video">
        <source src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1492660/3b67d75c3161ff8ebb1501f4436b839ea490e050.webm"/>
      </video>
      <div id="user-content">
        <div id="pfp-container">
          <SingleImage />
          <div className='user-name-profile'>
            <strong id='user-name-strong'>{user.username}</strong>
          </div>
          <div className='user-level'>
            <strong>Level</strong>
            <span className='level-num'>0</span>
          </div>
        </div>
        <div id="upload-pic-form">
          {users.id === +userId ? <UploadPicture /> :<></>}
        </div>
        <div className='screen-shots'>
          <h2 className='art-showcase-h2'>Art Show Case</h2>
          <Carousel
            autoPlay={true}
            interval={3000}
            indicators={true}
            navButtonsAlwaysInvisible={true}
            height='250px'
          >
            <img alt='' id="art-showcase-img" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_1.jpg"></img>
            <img alt='' id="art-showcase-img" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_2.png"></img>
            <img alt='' id="art-showcase-img" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_3.gif"></img>
            <img alt='' id="art-showcase-img" src="https://vaporgames.s3.us-west-1.amazonaws.com/screen_4.jpg"></img>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default User;
