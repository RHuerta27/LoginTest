/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';
import UserListScreen from './src/screens/UserListScreen';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="UserList" component={UserListScreen} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateUser" component={CreateUserScreen} />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainStack} />
        <Drawer.Screen name="Auth" component={AuthStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
