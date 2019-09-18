import React, { Component } from 'react';
import { 
	View,
	Text,
	StyleSheet,
	FlatList
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../Actions';
import PostItem from '../Component/PostItem';
import PostPropTypes from '../Component/PostPropTypes';
import { PropTypes } from 'prop-types';
import { Metrics } from '../Theme';

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

	keyExtract = item => item.id.toString();

	renderSeparator = () => <View style={styles.postSeparator}/>

	render() {
		return(
			<View style={styles.container}>
				<FlatList
					data={this.getItems()}
					keyExtractor={this.keyExtract}
					renderItem={this.renderPostItem}
					onEndReached={this.getNextItems}
					onEndReachedThreshold={0} // we trigger pagination only on end reach
					ItemSeparatorComponent={this.renderSeparator}
					ListEmptyComponent={<Text>Aucun post!</Text>}
				/>
				{ this.props.isFailed && <Text>Error</Text> }
			</View>
		);
	}
}

const mapStateToProps = ({ posts: { postsList, isFetching, isFailed } }) => ({ posts: postsList, isFetching, isFailed });

export default connect(mapStateToProps, actions)(PostListScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	postSeparator: {
		height: Metrics.smallMargin
	}
})

PostListScreen.propTypes = {
	posts: PropTypes.arrayOf(PostPropTypes).isRequired,
}
