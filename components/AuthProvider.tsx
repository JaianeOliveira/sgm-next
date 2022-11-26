import Router, { useRouter } from 'next/router';
import React from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { LoadingContainer } from '../styles/_layout';
import systemRoutes from '../utils/userAllowedRoutes';
import { theme } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';

type AuthProviderProps = {
	children: React.ReactNode[] | React.ReactNode;
};
const AuthProvider = ({ children }: AuthProviderProps) => {
	const isAuth: boolean = !!useAppSelector((state) => state.auth.token);
	const userRole = useAppSelector((state) => state.auth.userType);
	const router = useRouter();
	const userAllowedRoutes: string[] = systemRoutes[userRole];
	const { token } = theme.useToken();

	if (userAllowedRoutes.includes(router.pathname)) {
		return <>{children}</>;
	}

	if (typeof window !== 'undefined') {
		if (isAuth) {
			router.replace(userAllowedRoutes[0]);
		} else {
			router.push('/auth/login');
		}
	}

	return (
		<LoadingContainer>
			<LoadingOutlined style={{ fontSize: 32, color: token.colorPrimary }} />
		</LoadingContainer>
	);
};

export default AuthProvider;
