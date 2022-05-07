import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UploadPicture from './Images';

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
      <div>
        <div>
          <strong>{user.username}</strong>
        </div>
      </div>
      {users.id === +userId ? <UploadPicture /> : <></>}
    </>
  );
}
export default User;
