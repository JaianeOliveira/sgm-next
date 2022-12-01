import { notification } from 'antd';
import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { AuthResponse } from '../pages/api/auth';
import { UserResponse } from '../pages/api/user';
import api from '../services/api';

type LoginInputType = {
	email: string;
	password: string;
};

type AuthContextType = {
	isAuthenticated: boolean;
	login: (data: LoginInputType) => Promise<void>;
	user: UserResponse | null;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: any }) => {
	const [user, setUser] = useState<UserResponse | null>(null);

	const login = async ({ email, password }: LoginInputType) => {
		console.log(email, password);

		const {
			data: { token, user: userData },
		} = await api.post<AuthResponse>('/auth', {
			email,
			password,
		});

		setCookie(undefined, 'sgm-userRole', userData.userRole);

		setCookie(undefined, 'sgm-token', token, {
			maxAge: 60 * 60 * 1, // 1 hour
		});

		api.defaults.headers['Authorization'] = `Bearer ${token}`;

		setUser(user);

		notification.success({ message: `Bem vindo de volta!` });

		Router.push('/');
	};

	useEffect(() => {
		const { 'sgm-token': token } = parseCookies();
		if (token) {
			api
				.get('/user', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((response) => {
					setUser(response.data.user);
				});
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isAuthenticated: !!user, login, user }}>
			{children}
		</AuthContext.Provider>
	);
};
