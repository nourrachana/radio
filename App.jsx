import React, { useState, useEffect, useCallback } from 'react';
import { store } from './src/store/ConfigureStore'
import { Provider } from 'react-redux';
// Import Navigators from React Navigation

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Import screens
import Radios from './src/screen/Radio';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Screen
				name="Radios"
				component={Radios}
				options={{ headerShown: false }}
			/>
		</NavigationContainer>
	)
}
export default App;
