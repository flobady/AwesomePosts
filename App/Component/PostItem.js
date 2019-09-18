import React from 'react';
import { Text } from 'react-native';
import PostPropTypes from './PostPropTypes';

const PostItem = ({post}) => {
	return(
		<>
			<Text>{post.title}</Text>
		</>
	)
}

export default PostItem;

PostItem.propTypes = {
	post: PostPropTypes,
}
