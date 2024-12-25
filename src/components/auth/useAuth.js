// useAuth.js
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [auth, setAuth] = useState({ token: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({ token });
    }
  }, []);

  return auth;
};
