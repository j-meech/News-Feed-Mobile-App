import React, { Component } from 'react';
import {
	StyleSheet,
	View,
FlatList,
} from 'react-native';
import ArticleListItem from "./ArticleListItem";

class ArticleList extends Component {

	constructor(props) {
	  super(props);
	  this.renderItem = this.renderItem.bind(this);
	}

	renderItem({item}) {
		return (
			<ArticleListItem 
				item={item}
				onPress={this.props.onPress}
			/>
		);
	}

	keyExtractor(item, index) {
		return index;
	}

	renderSeparator() {
		const style = { height: 1, backgroundColor: '#ddd', marginLeft: 10 };
    	return <View style={style} />;
	}

	render() {
		return (
			<FlatList 
				data={this.props.articles}
				renderItem={this.renderItem}
				keyExtractor={this.keyExtractor}
				ItemSeparatorComponent={this.renderSeparator}
			/>
		);
	}
}

const styles = StyleSheet.create({

});


export default ArticleList;