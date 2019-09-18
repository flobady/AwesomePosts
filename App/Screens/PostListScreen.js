import React, { Component } from 'react';
import { 
	Text,
	View,
	StyleSheet,
	FlatList
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import PostItem from '../Component/PostItem';

class PostListScreen extends Component {

	state = {
		page: 1
	}

	componentDidMount() {
		this.props.getPosts();
	}

	getItems = () => this.props.posts.slice(0, 10 * this.state.page); // page size is 10

	getNextItems = () => this.setState({ page: this.state.page + 1 });

	renderPostItem = ({ item }) => <PostItem post={item}/>;

	render() {
		return(
			<View style={styles.container}>
				<FlatList
					data={this.getItems()}
					keyExtractor={item => item.id.toString()}
					renderItem={this.renderPostItem}
					onEndReached={this.getNextItems}
					onEndReachedThreshold={0} // we trigger pagination only on end reach
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ posts: { postsList } }) => ({ posts: postsList });

export default connect(mapStateToProps, actions)(PostListScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})