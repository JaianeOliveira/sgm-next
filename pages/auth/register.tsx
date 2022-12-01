import { Button, Col, Form, Input, Row } from 'antd';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import AuthLayout from '../../layout/auth';
import { RegisterCard } from '../../styles/_auth';

const Register = () => {
	return (
		<AuthLayout>
			<RegisterCard>
				<h2>Criar uma conta</h2>
				<Form layout="vertical">
					<Form.Item name="name" label="Nome">
						<Input />
					</Form.Item>
					<Row gutter={16}>
						<Col span={16}>
							<Form.Item name="email" label="E-mail institucional">
								<Input />
							</Form.Item>
						</Col>
						<Col span={8}>
							<Form.Item name="registration" label="Matrícula">
								<Input />
							</Form.Item>
						</Col>
					</Row>

					<Row gutter={16}>
						<Col span={12}>
							<Form.Item name="password" label="Senha">
								<Input.Password />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item name="confirm-password" label="Confirme sua senha">
								<Input.Password />
							</Form.Item>
						</Col>
					</Row>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							Criar conta
						</Button>
					</Form.Item>
					<div className="login">
						<span>
							Já tem uma conta ? <Link href="/auth/login">Faça Login</Link>
						</span>
					</div>
				</Form>
			</RegisterCard>
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

export default Register;
