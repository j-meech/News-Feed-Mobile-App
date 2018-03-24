import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	ScrollView,
	Image,
	Text,
	TouchableOpacity,
} from 'react-native';
import { Constants, WebBrowser } from 'expo';

class DetailItem extends Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress() {
		const { item } = this.props;
		WebBrowser.openBrowserAsync(item.url);
	}
	
	render() {
		const { item } = this.props;
    	return (
    		<ScrollView>
    			{ item.urlToImage ? 
    				<Image
    				style={styles.itemImage} 
    				source={{uri: item.urlToImage}} />
    				: null
    			}
    			<View style={styles.textContainer}>
	    			<Text style={styles.headline}>{ item.title }</Text>
	    			<View style={styles.divider}></View>
	    			<Text style={styles.content}>{ item.description }</Text>
		    		<TouchableOpacity style={styles.readMoreButton} onPress={this.onPress}>
		    			<Text style={styles.buttonText}>Read more...</Text>
		    		</TouchableOpacity>
	    		</View>
    		</ScrollView>
    	);
	}
}

const styles = StyleSheet.create({
	itemImage: {
		width: 320,
		height: 230,
	},
	textContainer: {
		margin: 20,
	},
	headline: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	divider: {
		height: 1,
		backgroundColor: '#ddd',
		marginVertical: 10,
	},
	content: {
		fontSize: 18,
	},
	readMoreButton: {
		marginTop: 20,
	},
	buttonText: {
		fontSize: 18,
		color: '#d35400'
	}
});


export default DetailItem;