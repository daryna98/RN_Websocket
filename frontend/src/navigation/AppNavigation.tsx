import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChartTable from '../screens/ChartTable';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chart" component={ChartTable} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStackNavigator;
