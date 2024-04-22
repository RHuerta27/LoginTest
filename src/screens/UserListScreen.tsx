import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserListScreen = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const storedUsers = await AsyncStorage.getItem('users');
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    };

    getUsers();
  }, []);

  return (
    <View>
      <Text>Lista de Usuarios:</Text>
      {users.map((user, index) => (
        <Text key={index}>{user}</Text>
      ))}
    </View>
  );
};

export default UserListScreen;
