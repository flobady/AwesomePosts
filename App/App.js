import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import PostListScreen from './Screens/PostListScreen';
import store from './Store';
import { Provider } from 'react-redux';

const rootNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  PostList: PostListScreen
});

const RootNavigation = createAppContainer(rootNavigator);

const App = () => {
  return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
  );
}

export default App;