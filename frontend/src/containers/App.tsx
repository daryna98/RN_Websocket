import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store';
import MainStackNavigator from '../navigation/AppNavigation';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <MainStackNavigator />
  </Provider>
);

export default App;
