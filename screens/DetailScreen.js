import React, { Component } from 'react';
import DetailItem from '../components/DetailItem';

class DetailScreen extends Component {

	constructor(props) {
	  super(props);
	}

	render() {
		const { item } = this.props.navigation.state.params;

		return (
			<DetailItem item={ item }/>
		);
	}
}

export default DetailScreen;