import { useState, useEffect } from 'react';
import api from '../../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');
    setUserId(JSON.parse(userId));
    setUserName(JSON.parse(userName));

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(acess) {
    const {
      data: { token, id, name },
    } = await api.post('/api/auth/login', acess);

    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('userId', JSON.stringify(id));
    localStorage.setItem('userName', JSON.stringify(name));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/myCompanies');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/');
  }

  return {
    authenticated,
    loading,
    handleLogin,
    handleLogout,
    userId,
    userName,
  };
}
