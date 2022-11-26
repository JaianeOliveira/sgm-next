import type { NextApiRequest, NextApiResponse } from 'next';
import dummy_users from '../../../dummy_data/users';

export default function createUser(req: NextApiRequest, res: NextApiResponse) {
	const body = req.body;

	const userExists = !!dummy_users.find((user) => user.email === body.email);

	if (userExists) {
		return res
			.status(400)
			.json({ message: 'Já existe um usuário cadastrado com esse email' });
	}

	dummy_users.push(body);

	const { password, ...dataToReturn } = body;

	return res.json({
		message: 'Usuário criado com sucesso',
		user: dataToReturn,
	});
}
