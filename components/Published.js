import React from 'react';
import {
 	Text,
 	StyleSheet,
} from 'react-native';
import moment from 'moment';

const Published = ({ date }) => {
 
    return (
		<Text style={styles.publishedText}>{ moment(date).fromNow() }</Text>
    );
  
}

const styles = StyleSheet.create({
	publishedText: {
		color: '#858585',
		marginTop: 5,
	},
});

export default Published;			