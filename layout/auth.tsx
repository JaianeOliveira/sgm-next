import React from 'react';
import Logo from '../components/common/Logo';
import {
	AuthContentContainer,
	AuthHeader,
	Header,
	StyledLayout,
} from '../styles/_layout';

const AuthLayout = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[];
}) => {
	return (
		<StyledLayout>
			<AuthHeader>
				<Logo />
				<p>Monitoria IFAL Palmeira dos Índios</p>
			</AuthHeader>
			<AuthContentContainer>{children}</AuthContentContainer>
		</StyledLayout>
	);
};

export default AuthLayout;
