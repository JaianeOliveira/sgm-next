import React from 'react';
import AuthLayout from './auth';
import MainLayout from './main';

interface LayoutProps {
	children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
	const isAuthenticated = true;
	return isAuthenticated ? (
		<MainLayout>{children}</MainLayout>
	) : (
		<AuthLayout>{children}</AuthLayout>
	);
};

export default Layout;
