import { Card } from 'antd';
import styled from 'styled-components';

export const LoginCard = styled(Card)`
	width: 75vw !important;
	border: 1px solid #c6c6c6;

	@media (min-width: 768px) {
		width: 500px !important;
	}

	button {
		width: 100%;
	}

	h2 {
		padding-bottom: 1rem;
	}

	.forget-password {
		display: flex;
		justify-content: flex-end;
		padding: 0.5rem 0;
	}

	.register {
		display: flex;
		width: 100%;
		justify-content: center;
	}
`;

export const RegisterCard = styled(Card)`
	width: 75vw !important;
	border: 1px solid #c6c6c6;

	@media (min-width: 768px) {
		width: 500px !important;
	}

	h2 {
		padding: 1rem 0;
	}

	button {
		width: 100%;
	}

	.login {
		display: flex;
		width: 100%;
		justify-content: center;
	}
`;
