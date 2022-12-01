import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import MainLayout from '../layout/main';

const Subscriptions = () => {
	return <MainLayout>Subscriptions</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { 'sgm-token': token, 'sgm-userRole': userRole } = parseCookies(ctx);

	if (!token) {
		return {
			redirect: {
				destination: '/auth/login',
				permanent: false,
			},
		};
	}

	if (userRole !== 'student') {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};

export default Subscriptions;
