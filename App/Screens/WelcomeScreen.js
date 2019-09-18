import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet
} from 'react-native';
import { Colors, Fonts } from '../Theme';

const WelcomeScreen = ({navigation}) => {
	return(
		<View style={styles.container}>
			<Text style={styles.title}>Bienvenue dans Awesome Posts!</Text>
			<Button
				title='Voir mes postes'
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
	},
	title: {
		color: Colors.primary,
		fontFamily: Fonts.fontFamily.main,
		fontSize: Fonts.size.h1
	}
})