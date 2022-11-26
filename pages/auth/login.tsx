import { Button, Form, Input, notification } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { user } from '../../dummy_data/users';
import { useAppDispatch } from '../../hooks/useRedux';
import AuthLayout from '../../layout/auth';
import { login } from '../../store/authSlice';
import { LoginCard } from '../../styles/_auth';
import api from '../../utils/api';

const Login = () => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [form] = Form.useForm();

	const loginHandler = async (e: any) => {
		e.preventDefault();
		console.log(form.getFieldsValue());
		const { email, password } = form.getFieldsValue();

		await api
			.post('/auth', { email, password })
			.then((response) => {
				onSuccess(response.data.user);
			})
			.catch((err) => {
				console.log(err);
				notification.error({ message: err.response.data.message });
			});
	};

	const onSuccess = (user: user) => {
		dispatch(
			login({
				token: '1234-sdkas-1231',
				userType: user.userRole,
			})
		);
		window.localStorage.setItem('sgm_token', '1234-sdkas-1231');
		notification.success({
			message: `Bem vindo(a) ${user.name}`,
		});
		router.replace('/');
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

export default Login;
