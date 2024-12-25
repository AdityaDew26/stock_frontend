import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './profile.css';

function Profile() {
  const { token } = useAuth(); 
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');  
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/getUser', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching profile', err);
        if (err.response && err.response.status === 401) {
          setError('Unauthorized - Please log in again');
        } else {
          setError('Failed to load profile');
        }
      } finally {
        setLoading(false);  
      }
    };

    fetchProfile();
  }, [token, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleLink = () => {
    navigate('/profileUpdate');
  };

  return (
    <div className="profile-box">
      <h2>User Profile</h2>
      {userData ? (
        <div>
          <img
            src={userData.avatar || 'default-avatar.png'}
            alt="Avatar"
            className="avatar"
          />
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
        </div>
      ) : (
        <p>No profile data available</p>
      )}
      <div className="update">
        <button onClick={handleLink}>Update</button>
      </div>
    </div>
  );
}

export default Profile;
