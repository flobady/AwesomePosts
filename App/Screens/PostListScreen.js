import React, { Component } from 'react';
import { 
	Text,
	View,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class PostListScreen extends Component {

	componentDidMount() {
		this.props.getPosts();
	}

	render() {
		console.log('posts', this.props.posts)
		return(
			<View style={styles.container}>
				<Text>PostListScreen</Text>
			</View>
		);
	}
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, actions)(PostListScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})