import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PostPropTypes from './PostPropTypes';
import { Colors, Metrics, Fonts } from '../Theme';

const PostItem = ({post: { title }}) => {
	return(
		<View style={styles.postContainer}>
			<Text style={styles.title}>{title}</Text>
		</View>
	)
}

export default PostItem;

const styles = StyleSheet.create({
	postContainer: {
		borderWidth: 1,
		borderColor: Colors.text,
		padding: Metrics.smallPadding,
		borderRadius: Metrics.smallRadius,
		marginLeft: Metrics.smallMargin,
		marginRight: Metrics.smallMargin
	},
	title: {
		fontFamily: Fonts.fontFamily.main
	}
})

PostItem.propTypes = {
	post: PostPropTypes,
}
