import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ArticleListScreen from './screens/ArticleListScreen';
import DetailScreen from './screens/DetailScreen';
import { createStore, applyMiddleware, compose } from 'redux';
import initial from './data/initial';
import reducer from './data/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

StatusBar.setBarStyle('light-content');

const RootNavigator = StackNavigator({
  List: ArticleListScreen,
  Detail: DetailScreen,
}, {
  navigationOptions: {
  	title: "BBC News",
    headerStyle: {
      backgroundColor: '#d35400'
    },
    headerTintColor: '#fff'
  }
});

const store = createStore(reducer,initial, compose(applyMiddleware(thunk)));

const App = () => {
	return (
		<Provider store={ store }>
			<RootNavigator />
		</Provider>
	);
}

export default App;