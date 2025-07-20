import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {   
  const {userId} = useParams()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`); 
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  return (
    <div>
      <h2>User Details:</h2>
      {user && (
        <ul>
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
        </ul>
      )}
    </div>
  );
};

export default UserDetail;