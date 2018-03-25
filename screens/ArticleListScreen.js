import React, { Component } from 'react';
import ArticleList from "../components/ArticleList";
//import articles from "../data/articles.json";
import { connect } from "react-redux";
import { getArticles } from "../data/api";

class ArticleListScreen extends Component {

	constructor(props) {
	  super(props);
	  this.onPress = this.onPress.bind(this);
	}

	componentDidMount() {
        this.props.onLoad();
    }

	onPress(item) {
		this.props.navigation.navigate("Detail", {
			item: item,
		});
	}

	render() {
		return (
			<ArticleList 
				articles={this.props.articles}
				onPress={this.onPress}/>
		);
	}
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(getArticles()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListScreen);
