import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../services/prisma';
import { hashCompare, newJwt } from '../../utils';
import { UserResponse } from './user';

export type AuthResponse = {
	user: UserResponse;
	token: string;
};

export type AuthErrorResponse = {
	message: string;
};

export default async function auth(
	req: NextApiRequest,
	res: NextApiResponse<AuthResponse | AuthErrorResponse>
) {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(401).json({
			message: `Insira ${!email && 'o email'} ${!email && !password && 'e'} ${
				!password && 'a senha'
			} do usuário`,
		});
	}

	const user = await prisma.user.findFirst({
		where: { email },
	});

	if (!user) {
		return res.status(404).json({ message: 'Usuário não encontrado' });
	}

	const passwordCheck = await hashCompare(password, user.password_hash);

	if (!passwordCheck) {
		return res.status(401).json({ message: 'Senha incorreta' });
	}

	const newToken = newJwt({ email, password });

	const { password_hash, ...userDataToReturn } = user;

	return res.json({
		user: userDataToReturn,
		token: newToken,
	});
}
