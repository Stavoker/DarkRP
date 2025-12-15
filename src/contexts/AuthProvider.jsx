import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCurrentUser, logout as logoutApi } from '../api/auth.js';
import API_URL from '../api/config.js';
import { AuthContext } from './AuthContext.js';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem('steam_token');
    if (token) {
      getCurrentUser(token)
        .then((userData) => {
          if (userData) {
            setUser(userData);
          } else {
            localStorage.removeItem('steam_token');
          }
        })
        .catch(() => {
          localStorage.removeItem('steam_token');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('steam_token', token);

      try {
        const decodedToken = atob(token);
        const userData = JSON.parse(decodedToken);
        setUser(userData);
      } catch {
        getCurrentUser(token)
          .then((userData) => {
            if (userData) {
              setUser(userData);
            }
          })
          .catch(() => {
            // Silent fail - token will be removed on next check
          });
      }
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  const login = () => {
    window.location.href = `${API_URL}/api/auth/steam`;
  };

  const logout = async () => {
    try {
      await logoutApi();
    } catch {
      // Silent fail - logout locally anyway
    } finally {
      localStorage.removeItem('steam_token');
      setUser(null);
    }
  };

  return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>;
};
