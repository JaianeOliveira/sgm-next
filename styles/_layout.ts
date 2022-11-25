import styled from 'styled-components';
import { Layout } from 'antd';

export const LogoContainer = styled.div<{ collapsed: boolean }>`
	padding: 1rem 1.5rem;

	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: ${(props) => (props.collapsed ? 'center' : 'flex-start')};
	transition: transform 0.8s ease-out;

	span {
		font-size: 0.6rem;
		text-transform: uppercase;
		transition: transform 0.2s ease;
		${(props) => props.collapsed && 'transform: scale(0%); display: none;'}
	}
`;

export const Header = styled(Layout.Header)`
	background-color: #fff;
	border-bottom: 1px solid #dadada;
`;

export const AuthHeader = styled.header`
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 2rem 1rem 1rem 1rem;

	p {
		text-transform: uppercase;
		text-align: center;
	}
`;

export const Sider = styled(Layout.Sider)`
	border-right: 1px solid #dadada;

	& .ant-layout-sider-trigger {
		border-right: 1px solid #dadada !important;
	}

	& .ant-menu-item-selected {
		/* background: #4e9f3d !important; */
		/* color: #fff !important; */
		background: transparent !important;
	}

	& .ant-menu-item-selected .ant-menu-title-content {
		/* color: #fff !important; */
	}
`;

export const StyledLayout = styled(Layout)`
	background-color: #fff;
`;

export const AuthContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	min-height: 80vh;
`;
