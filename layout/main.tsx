import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import React, { useState } from 'react';
import Logo from '../components/common/Logo';
import MainHeader from '../components/MainHeader';
import {
	Header,
	LogoContainer,
	Sider,
	StyledContent,
	StyledLayout,
} from '../styles/_layout';
import getMenuItems from '../utils/menuItems';

type MainLayoutProps = {
	children?: React.ReactNode | React.ReactNode[];
	headerContent?: React.ReactNode | React.ReactNode[];
};

const MainLayout = ({ children }: MainLayoutProps) => {
	const router = useRouter();
	const [collapsed, setCollapsed] = useState(false);

	const { 'sgm-userRole': userRole } = parseCookies();

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
