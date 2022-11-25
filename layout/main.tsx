import { Layout, Menu, notification } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../components/common/Logo';
import {
	LogoContainer,
	Header,
	Sider,
	StyledLayout,
	StyledContent,
} from '../styles/_layout';
import Link from 'next/link';
import { useAppSelector } from '../hooks/useRedux';
import getMenuItems from '../utils/menuItems';
import Container from '../components/common/Container';
import MainHeader from '../components/MainHeader';

type MainLayoutProps = {
	children?: React.ReactNode | React.ReactNode[];
	headerContent?: React.ReactNode | React.ReactNode[];
};

const MainLayout = ({ children }: MainLayoutProps) => {
	const router = useRouter();
	const [collapsed, setCollapsed] = useState(false);

	const userRole = useAppSelector((state) => state.auth.userType);

	const activePath = router.asPath === '/' ? '/' : router.asPath.split('/')[1];

	return (
		<StyledLayout>
			<Sider
				theme="light"
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<LogoContainer collapsed={collapsed}>
					<Logo />
					<span>Instituto Federal de Alagoas</span>
				</LogoContainer>
				<Menu
					onClick={(item) => router.push(item.key)}
					selectedKeys={[activePath]}
					defaultSelectedKeys={['/']}
					mode="inline"
					items={getMenuItems(userRole).map(({ icon, label, navTo }) => ({
						key: navTo,
						icon: React.createElement(icon),
						label: label,
					}))}
				/>
			</Sider>
			<StyledLayout>
				<Header style={{ backgroundColor: 'transparent' }}>
					<MainHeader />
				</Header>
				<StyledContent>{children}</StyledContent>
			</StyledLayout>
		</StyledLayout>
	);
};

export default MainLayout;
