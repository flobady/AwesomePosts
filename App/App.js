import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import PostListScreen from './Screens/PostListScreen';
import store from './Store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

const rootNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerBackTitle: 'Retour',
    }
  },
  PostList: PostListScreen
});

const RootNavigation = createAppContainer(rootNavigator);

const App = () => {
  return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <RootNavigation/>
        </PersistGate>
      </Provider>
  );
}

export default App;