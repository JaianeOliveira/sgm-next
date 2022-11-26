import type { NextApiRequest, NextApiResponse } from 'next';
import dummy_users, { user } from '../../../dummy_data/users';

export default function User(req: NextApiRequest, res: NextApiResponse) {
	const method = req.method;
	const body: {
		email?: string;
		password?: string;
		name?: string;
		userRole?: 'student' | 'monitor' | 'teacher' | 'admin';
		avatar?: string;
	} = req.body;

	if (method === 'GET') {
		const user = dummy_users.find((user) => user.email === req.query.email);

		if (!user) {
			return res.status(404).json({ message: 'Usuário não encontrado' });
		}

		const { password, ...dataToReturn } = user;
		return res.status(200).json({ user: dataToReturn });
	} else if (method === 'POST') {
		const userIndex = dummy_users.findIndex(
			(user) => user.email === req.query.email
		);

		if (userIndex === -1) {
			return res.status(404).json({ message: 'Usuário não encontrado' });
		}

		dummy_users[userIndex] = { ...dummy_users[userIndex], ...body };

		return res.json({ message: 'Usuário alterado com sucesso' });
	} else if (method === 'DELETE') {
		const userIndex = dummy_users.findIndex(
			(user) => user.email === req.query.email
		);

		if (userIndex === -1) {
			return res.status(404).json({ message: 'Usuário não encontrado' });
		}

		const user = dummy_users[userIndex];

		if (user.password !== req.query.password) {
			return res.status(403).json({ message: 'Senha incorreta' });
		}

		dummy_users.splice(userIndex, 1);

		return res.json({ message: 'Usuário deletado com sucesso' });
	}
}
