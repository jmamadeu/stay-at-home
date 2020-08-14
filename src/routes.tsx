import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Activity from './pages/Activity';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Home' component={Home} />
        <Screen name='Activity' component={Activity} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
