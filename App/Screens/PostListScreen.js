import React from 'react';
import { 
	Text,
	View,
	StyleSheet
} from 'react-native';

const PostListScreen = () => {
	return(
		<View style={styles.container}>
			<Text>PostListScreen</Text>
		</View>
	);
}

export default PostListScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})