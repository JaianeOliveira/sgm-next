import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	token: string | null;
	userRole: string;
}

const initialState: AuthState = {
	token: null,
	userRole: 'external',
};

export const AuthSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<AuthState>) => {
			state.token = action.payload.token;
			state.userRole = action.payload.userRole;
		},
		logout: (state) => {
			state.token = null;
			state.userRole = 'external';
		},
	},
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
