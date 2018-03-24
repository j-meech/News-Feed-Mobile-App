import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TouchableHighlight,
	Text,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Platform } from 'react-native';
import moment from 'moment';

const isIOS = Platform.OS === 'ios';

class ArticleListItem extends Component {

	constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}

	onPress() {
		const {item, onPress} = this.props;
		onPress(item);
	}

	render() {
		const { item } = this.props;

		return (
			<TouchableHighlight
				style={styles.articleItem} 
				underlayColor="#e4e4e4"
				onPress={this.onPress}>
				<View style={styles.container}>
					<View style={styles.headlineContainer}>
						<Text style={styles.headline} numberOfLines={1}>{this.props.item.title}</Text>
						<Text>{ moment(item.publishedAt).fromNow() }</Text>
					</View>
					{ isIOS ? 
						<View style={styles.chevron}>
							<Entypo name="chevron-right" size={25} color="#e4e4e4"/>
						</View>
						: null
					}
				</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	articleItem: {
		flexDirection: 'row',
		height: 50,
		backgroundColor: '#fff',
		padding: 10,
		alignItems: 'center',
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	headlineContainer: {
		flexDirection: 'column',
		width: 280,
	},
	headline: {
		fontSize: 18,
		lineHeight: 22,
	},
	chevron: {
		flex: 1,
		flexDirection: 'row-reverse',
	}
});


export default ArticleListItem;