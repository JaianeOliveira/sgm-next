import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.';

interface AuthState {
	token: string | null;
	userType: 'external' | 'student' | 'monitor' | 'teacher' | 'admin';
}

const initialState: AuthState = {
	token: null,
	userType: 'external',
};

export const AuthSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<AuthState>) => {
			state.token = action.payload.token;
			state.userType = action.payload.userType;
		},
		logout: (state) => {
			state.token = null;
			state.userType = 'external';
		},
	},
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
