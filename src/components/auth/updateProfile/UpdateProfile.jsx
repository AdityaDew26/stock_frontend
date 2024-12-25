import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';
import './updateProfile.css';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
  const { token } = useAuth();
  const [userData, setUserData] = useState({ name: '', bio: '', avatar: '' });
  const [error, setError] = useState(null);
  const navigate= useNavigate()

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setError('No token found');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/getUser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUserData(response.data);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        setError(`Error fetching profile: ${error.message}`);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/api/auth/updateUser', userData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        alert('Profile updated successfully');
        setUserData(response.data);
      } else {
        setError('Failed to update profile');
      }
    } catch (err) {
      setError('Error updating profile: ' + err.message);
    }
  };

  return (
    <div className="update-profile-container">
      <h2 className="update-profile-title">Edit Profile</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="update-profile-form" onSubmit={handleSubmit}>
        <label htmlFor="">UserName</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          className="update-profile-input"
          id="name-input"
        />
        <label htmlFor="">Bio</label>
        <input
          type="text"
          name="bio"
          value={userData.bio}
          onChange={handleChange}
          placeholder="Bio"
          className="update-profile-input"
          id="bio-input"
        />
        <label htmlFor="">Image URL</label>
        <input
          type="text"
          name="avatar"
          value={userData.avatar}
          onChange={handleChange}
          placeholder="Avatar URL"
          className="update-profile-input"
          id="avatar-input"
        />
        <button type="submit" className="update-profile-button" id="save-button" onClick={()=>{navigate("/portfolio")}}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
