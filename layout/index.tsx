import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import AuthLayout from './auth';
import MainLayout from './main';

import { LoadingOutlined } from '@ant-design/icons';
import { StyledContent } from '../styles/_layout';

interface LayoutProps {
	children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
	const isAuthenticated = useAppSelector((state) => state.auth.token);
	const router = useRouter();

	const publicRoutes = [
		'/',
		'/vacancies',
		'/calendar',
		'/faq',
		'/tutorials',
		'/auth/login',
		'/auth/register',
		'/auth/reset-password',
	];

	if (
		(isAuthenticated && router.asPath === '/auth/login') ||
		router.asPath === '/auth/register' ||
		router.asPath === '/auth/reset-password'
	) {
		router.replace('/');
	}

	if (!isAuthenticated || !publicRoutes.includes(router.asPath)) {
		router.replace('/auth/login');
		return (
			<StyledContent>
				<LoadingOutlined />
			</StyledContent>
		);
	}

	return (
		<StyledContent>
			<LoadingOutlined />
		</StyledContent>
	);
};

export default Layout;
