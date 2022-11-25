import React from 'react';
import { Avatar, Button } from 'antd';
import { Container, Title, UserData } from '../styles/_header';

import { useAppSelector } from '../hooks/useRedux';
import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const MainHeader = () => {
	const router = useRouter();
	const redirectHandler = () => router.push('/auth/login');

	const isLogged = useAppSelector((state) => state.auth.token);

	return (
		<Container>
			<Title>Monitoria IFAL Palmeira dos índios</Title>
			{isLogged ? (
				<UserData>
					<span>Jaiane Oliveira</span>

					<Avatar src="https://www.github.com/JaianeOliveira.png">JO</Avatar>
				</UserData>
			) : (
				<Button type="primary" onClick={redirectHandler}>
					Acessar o sistema
				</Button>
			)}
		</Container>
	);
};

export default MainHeader;
