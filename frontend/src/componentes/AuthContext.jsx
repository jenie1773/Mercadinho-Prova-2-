import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLogado(!!token);
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setLogado(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
