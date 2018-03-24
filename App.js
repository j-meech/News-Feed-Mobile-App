import React from 'react';
import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ArticleListScreen from "./screens/ArticleListScreen";
import DetailScreen from "./screens/DetailScreen";

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

export default RootNavigator;