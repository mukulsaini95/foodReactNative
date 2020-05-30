import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/searchScreen'
import DetailScreen from './src/detailScreen'
const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  const menus = [
    { name: "SearchScreen", component: SearchScreen,options:{title: 'Awesome app'} },
    { name: "DetailScreen", component: DetailScreen,options:{title: 'Awesome app'} }
  ]
  return (
    <NavigationContainer>
      <Navigator initialRouteName="SearchScreen" headerMode="screen" screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: 'tomato' }, }}>
        {menus.map((temp, index) => (
          <Screen name={temp.name} key={index} component={temp.component} options={temp.options} />
        ))}
      </Navigator>
    </NavigationContainer>
  )
}

export default App;``