import { User } from '@prisma/client';
import { Button, Form, Input } from 'antd';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import AuthLayout from '../../layout/auth';
import { LoginCard } from '../../styles/_auth';

type AuthResponse = {
	user: User;
	token: string;
};

const Login = () => {
	const { login: authenticate } = useContext(AuthContext);
	const [form] = Form.useForm();

	const loginHandler = async (e: any) => {
		e.preventDefault();

		const { email, password } = form.getFieldsValue();

		await authenticate({ email, password });
	};

	return (
		<AuthLayout>
			<LoginCard style={{ width: 300 }}>
				<h2>Login</h2>
				<Form name="login" form={form} layout="vertical">
					<Form.Item name="email" label="E-mail">
						<Input />
					</Form.Item>
					<Form.Item noStyle>
						<Form.Item
							name="password"
							label="Senha"
							style={{ marginBottom: 0 }}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item>
							<div className="forget-password">
								<Link href="/auth/reset-password">Esqueci minha senha</Link>
							</div>
						</Form.Item>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" onClick={loginHandler}>
							Entrar
						</Button>
					</Form.Item>

					<div className="register">
						<span>
							Não tem uma conta? <Link href="/auth/register">Cadastre-se</Link>
						</span>
					</div>
				</Form>
			</LoginCard>
		</AuthLayout>
	);
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

export default Login;
