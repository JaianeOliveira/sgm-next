import type { NextApiRequest, NextApiResponse } from 'next';
import dummy_users, { user } from '../../dummy_data/users';

type SuccessResponse = {
	user: user;
};

type ErrorResponse = {
	message: string;
};

export default function auth(
	req: NextApiRequest,
	res: NextApiResponse<SuccessResponse | ErrorResponse>
) {
	const input = req.body;

	const user = dummy_users.find((user) => user.email === input.email);

	if (!user) {
		return res.status(401).json({ message: 'Usuário não encontrado' });
	}

	if (user.password !== input.password) {
		return res.status(401).json({ message: 'Senha incorreta' });
	}

	const { password, ...dataToReturn } = user;

	return res.status(200).json({ user: dataToReturn });
}
