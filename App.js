import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Navigation
import Tabs from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      <StatusBar 
        barStyle = "light-content"
      />
    </NavigationContainer>
  );
};

export default App;  