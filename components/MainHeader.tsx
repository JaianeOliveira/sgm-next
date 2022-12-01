import { Avatar, Button } from 'antd';
import { useContext } from 'react';
import { Container, Title, UserData } from '../styles/_header';

import { UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { AuthContext } from '../contexts/AuthContext';

const MainHeader = () => {
	const router = useRouter();
	const { isAuthenticated, user } = useContext(AuthContext);
	const redirectHandler = () => router.push('/auth/login');

	const getFirstsLetters = (value: string) => {
		const words = value.split(' ');

		return `${words[0][0]}${words[words.length - 1][0]}`;
	};

	return (
		<Container>
			<Title>Monitoria IFAL Palmeira dos índios</Title>
			{isAuthenticated ? (
				<UserData>
					<span>{user?.name}</span>

					<Avatar src={user?.avatar}>
						<UserOutlined />
					</Avatar>
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
