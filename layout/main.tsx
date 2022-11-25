import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Logo from '../components/common/Logo';
import { LogoContainer, Header, Sider, StyledLayout } from '../styles/_layout';
import Link from 'next/link';

const { Content, Footer } = Layout;

type SideBarItem = {
	icon: any;
	label: string | React.ReactNode;
	navTo: string;
};

type MainLayoutProps = {
	children?: React.ReactNode | React.ReactNode[];
	headerContent?: React.ReactNode | React.ReactNode[];
	grid?: string;
	SideBarItems?: SideBarItem[];
};

const MainLayout = ({
	children,
	headerContent,
	grid,
	SideBarItems,
}: MainLayoutProps) => {
	const router = useRouter();

	const getKey = () => {
		console.log(router.pathname);

		const paths = router.pathname.split('/');
		return paths[paths.length - 1];
	};

	const [collapsed, setCollapsed] = useState(false);
	return (
		<StyledLayout>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={setCollapsed}
				theme="light"
			>
				<LogoContainer collapsed={collapsed}>
					<Logo />
					<span>Instituto Federal de Alagoas</span>
				</LogoContainer>
				<Menu
					theme="light"
					mode="inline"
					selectedKeys={[getKey()]}
					items={SideBarItems?.map(({ icon, label, navTo }, index) => ({
						key: navTo,
						icon: React.createElement(icon),
						label: <Link href={navTo}>{label}</Link>,
					}))}
				/>
			</Sider>
			<StyledLayout>
				<Header>{headerContent}</Header>
				<Content
					style={{ padding: '2.5rem 5rem 2.5rem 2.5rem', minHeight: '85vh' }}
				>
					{children}
				</Content>
			</StyledLayout>
		</StyledLayout>
	);
};

export default MainLayout;
