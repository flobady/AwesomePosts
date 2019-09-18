import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet
} from 'react-native';
import { Colors } from '../Theme';

const WelcomeScreen = ({navigation}) => {
	return(
		<View style={styles.container}>
			<Button
				title='Ma liste de postes'
				onPress={()=>navigation.navigate('PostList')}
				{...styles.button}
			/>
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	button: {
		color: Colors.primary
	}
})