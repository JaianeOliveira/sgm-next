import { Button } from 'antd';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import MainLayout from '../layout/main';

const Profile = () => {
	const { logout, user } = useContext(AuthContext);
	return (
		<MainLayout>
			<h2>{user?.name}</h2>
			<Button onClick={logout}>Logout</Button>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { 'sgm-token': token } = parseCookies(ctx);

	if (!token) {
		return {
			redirect: {
				destination: '/auth/login',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};

export default Profile;
