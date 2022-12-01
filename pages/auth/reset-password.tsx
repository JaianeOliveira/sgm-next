import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import AuthLayout from '../../layout/auth';

const ResetPassword = () => {
	return <AuthLayout>ResetPassword</AuthLayout>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { 'sgm-token': token, 'sgm-userRole': userRole } = parseCookies(ctx);

	if (token) {
		return {
			redirect: {
				destination: userRole === 'student' ? '/' : `/${userRole}/dashboard`,
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};
export default ResetPassword;
