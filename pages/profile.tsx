import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import MainLayout from '../layout/main';
import { getApiClient } from '../services/axios';
import { UserResponse } from './api/user';

type ProfileProps = {
	user: UserResponse;
};

const Profile = ({ user }: ProfileProps) => {
	console.log(user);
	return (
		<MainLayout>
			<h2>{user?.name}</h2>
		</MainLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const apiClient = getApiClient(ctx);

	const { 'sgm-token': token } = parseCookies(ctx);

	if (!token) {
		return {
			redirect: {
				destination: '/auth/login',
				permanent: false,
			},
		};
	}

	await apiClient.get('/user');

	return {
		props: {},
	};
};

export default Profile;
