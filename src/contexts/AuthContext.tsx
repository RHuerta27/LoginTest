import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  name: string;
  password: string;
};

type AuthContextType = {
  user: string | null;
  login: (name: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem('user');
      setUser(storedUser);
    };
    loadUser();
  }, []);

  const login = async (name: string, password: string) => {
    const user: User = {name, password};
    setUser(name);
    await AsyncStorage.setItem('user', JSON.stringify(user));

    const existingUsers = await AsyncStorage.getItem('users');
    const users = existingUsers ? JSON.parse(existingUsers) : [];
    users.push(name);
    await AsyncStorage.setItem('users', JSON.stringify(users));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
