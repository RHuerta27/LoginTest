import React, {useState, useContext} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../contexts/AuthContext';

const CreateUserScreen = () => {
  const {login} = useContext(AuthContext);
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleCreateUser = async () => {
    await login(name, password);
    navigation.navigate('CreateUserScreen');
  };

  return (
    <View>
      <TextInput
        placeholder="Nombre de Uusuario"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Contraseña"
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Create User" onPress={handleCreateUser} />
    </View>
  );
};

export default CreateUserScreen;
