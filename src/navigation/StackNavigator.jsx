import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Radios from '../screen/Radio';
const Stack = createNativeStackNavigator();
const screenOptionStyle = {
	headerStyle: {backgroundColor: "#9AC4F8"},
	headerTintColor: "red",
	headerBackTitle: "Back",
};

const HomeNavigator = (navigation) => {
	return (
		<Stack.Navigator screenOptions={{ screenOptionStyle }}>
			<Stack.Screen
				navigation={navigation}
				name="Radios"
				component={Radios}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
};

export {HomeNavigator};