import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import * as USER_HELPERS from '../utils/userToken';

const UserProfile = (props) => {
  const { authenticate, user } = props;
  
  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/users/profile/${user._id}`, {
        headers: {
          Authorization: USER_HELPERS.getUserToken(),
        },
      })
      .then((response) => {
        authenticate(response.data.showUser);
      });
  }, [authenticate, user._id]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>
        {user.name} {user.lastName}
      </p>
    </div>
  );
};

export default UserProfile;
