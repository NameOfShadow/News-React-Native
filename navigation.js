import React from 'react';
import Article from "./src/components/Article"
import Main from "./src/components/Main"

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="New News" component={Main} options={{title: "New News"}}/>
      <Stack.Screen name="Article" component={Article}/>
    </Stack.Navigator>
  </NavigationContainer>
}
//headerShown: false} screenOptions={{}