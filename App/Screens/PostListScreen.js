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

	componentDidMount() {
		this.props.getPosts();
	}

	sortPostItem = () => this.props.posts.sort((a,b) =>  a.title.localeCompare(b.title));

	renderPostItem = ({ item }) => <PostItem post={item}/>;

	render() {
		return(
			<View style={styles.container}>
				<FlatList
					data={this.sortPostItem()}
					keyExtractor={item => item.id.toString()}
					renderItem={this.renderPostItem}
					onEndReached={()=>console.log('pagination, fetch next messages')}
					onEndReachedThreshold={0.5}
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