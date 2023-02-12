import { configureStore } from '@reduxjs/toolkit'
import AuthReducers from '../features/Auth';

export const store = configureStore({
	reducer: {
		auth: AuthReducers,
	},
})