import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	ScrollView,
	Image,
	Text,
	TouchableOpacity,
} from 'react-native';
import Published from './Published';
import { Constants, WebBrowser } from 'expo';

class DetailItem extends Component {

	constructor(props) {
		super(props);
		this.readMoreLink = this.readMoreLink.bind(this);
		this.attributionLink = this.attributionLink.bind(this);
	}

	readMoreLink() {
		const { item } = this.props;
		WebBrowser.openBrowserAsync(item.url);
	}

	attributionLink() {
		WebBrowser.openBrowserAsync("https://newsapi.org/");
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
	    			<Published date={item.publishedAt}/>
	    			<View style={styles.divider}></View>
	    			<Text style={styles.content}>{ item.description }</Text>
		    		<TouchableOpacity style={styles.readMoreLink} onPress={this.readMoreLink}>
		    			<Text style={styles.readMoreText}>Read more...</Text>
		    		</TouchableOpacity>
		    		<TouchableOpacity style={styles.attributionLink} onPress={this.attributionLink}>
		    			<Text style={styles.attributionLinkText}>Powered by News Api</Text>
		    		</TouchableOpacity>
	    		</View>
    		</ScrollView>
    	);
	}
}

const styles = StyleSheet.create({
	itemImage: {
		width: 320,
		height: 210,
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
		marginVertical: 15,
	},
	content: {
		fontSize: 18,
	},
	readMoreLink: {
		marginTop: 20,
	},
	readMoreText: {
		fontSize: 18,
		color: '#d35400'
	},
	attributionLink:{
		marginVertical: 20,
		alignSelf: 'center',
	},
	attributionLinkText: {
		color: '#919191',
	},
});


export default DetailItem;