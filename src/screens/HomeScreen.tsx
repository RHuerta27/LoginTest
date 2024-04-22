import React, {useContext, useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import AuthContext from '../contexts/AuthContext';

const HomeScreen = () => {
  const {login} = useContext(AuthContext);
  const [superUser, setSuperUser] = useState({name: '', password: ''});
  const [loginUser, setLoginUser] = useState({name: '', password: ''});

  const handleCreateSuperUser = async () => {
    await login(superUser.name, superUser.password);
  };

  const handleLogin = async () => {
    await login(loginUser.name, loginUser.password);
  };

  return (
    <View>
      <Text>Create Super User:</Text>
      <TextInput
        placeholder="Nombre de Super Usuario"
        value={superUser.name}
        onChangeText={text => setSuperUser({...superUser, name: text})}
      />
      <TextInput
        placeholder="Contraseña"
        value={superUser.password}
        onChangeText={text => setSuperUser({...superUser, password: text})}
        secureTextEntry={true}
      />
      <Button title="Crear Super Usuario" onPress={handleCreateSuperUser} />

      <Text style={{marginTop: 20}}>Iniciar Sesion</Text>
      <TextInput
        placeholder="Nombre"
        value={loginUser.name}
        onChangeText={text => setLoginUser({...loginUser, name: text})}
      />
      <TextInput
        placeholder="Contraseña"
        value={loginUser.password}
        onChangeText={text => setLoginUser({...loginUser, password: text})}
        secureTextEntry={true}
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />
    </View>
  );
};

export default HomeScreen;
