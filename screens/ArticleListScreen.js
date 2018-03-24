import React, { Component } from 'react';
import {

} from 'react-native';
import ArticleList from "../components/ArticleList";
import articles from "../data/articles.json";

class ArticleListScreen extends Component {

	constructor(props) {
	  super(props);
	  this.onPress = this.onPress.bind(this);
	}

	onPress(item) {
		this.props.navigation.navigate("Detail", {
			item: item,
		});
	}

	render() {
		return (
			<ArticleList 
				articles={articles}
				onPress={this.onPress}/>
		);
	}
}

export default ArticleListScreen;