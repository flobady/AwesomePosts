import React from 'react';
import { Text } from 'react-native';
import { PropTypes } from 'prop-types';

const PostItem = ({post}) => {
	return(
		<>
			<Text>{post.title}</Text>
		</>
	)
}

export default PostItem;

PostItem.propTypes = {
	post: PropTypes.object
}
