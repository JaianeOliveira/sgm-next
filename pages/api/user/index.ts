import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../services/prisma';
import { UserInput } from '../../../types';
import { hashCompare, hashGenerator } from '../../../utils';
export type UserResponse = {
	id: string;
	name: string;
	email: string;
	registrationNumber: string;
	avatar: string | null;
	userRole: string;
};

const getIdentifier = (data: UserInput) => {
	if (data.email) {
		return { email: data.email };
	} else if (data.registrationNumber) {
		return { registrationNumber: data.registrationNumber };
	} else return {};
};

export default async function User(req: NextApiRequest, res: NextApiResponse) {
	const method = req.method;
	const token = req.headers.authorization?.split(' ')[1];

	if (method === 'GET') {
		if (token) {
			const decodedToken = jwt.decode(token);

			if (typeof decodedToken !== 'string') {
				const user = await prisma.user.findFirst({
					where: { email: decodedToken?.email },
				});

				if (!user) {
					return res.status(404).json({ message: 'Usuário não encontrado' });
				}

				const { password_hash, ...userToResponse } = user;
				return res.status(200).json({ user: userToResponse });
			}
		}

		return res.status(401).json({ message: 'Token Inválido' });
	} else if (method === 'POST') {
		const { password, ...data }: UserInput = req.body;

		const user = await prisma.user.findFirst({
			where: { ...getIdentifier(req.body) },
		});

		if (user) {
			const { password_hash, ...updatedUser } = await prisma.user.update({
				where: { ...getIdentifier(req.body) },
				data: {
					...data,
					password_hash: password ? await hashGenerator(password) : undefined,
				},
			});

			return res.json({
				message: 'Usuário alterado com sucesso',
				user: updatedUser,
			});
		} else {
			if (
				!password ||
				!data.email ||
				!data.name ||
				!data.registrationNumber ||
				!data.userRole
			) {
				return res.status(401).json({
					message:
						'Insira todos os dados necessários para a criação de um novo usuário',
				});
			}
			const { password_hash, ...createdUser } = await prisma.user.create({
				data: {
					name: data.name,
					email: data.email,
					registrationNumber: data.registrationNumber,
					avatar: data.avatar,
					userRole: data.userRole,
					password_hash: await hashGenerator(password),
				},
			});

			return res.json({
				message: 'Usuário criado com sucesso',
				user: createdUser,
			});
		}
	} else if (method === 'DELETE') {
		const {
			email,
			password,
		}: {
			email?: string;
			password?: string;
		} = req.query;

		if (!email || !password) {
			return res.status(401).json({
				message: `Informe ${!email && 'o email'} ${
					!email && !password && 'e'
				} ${!password && 'a senha'} do usuário`,
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

		await prisma.user.delete({
			where: { email },
		});

		return res.json({ message: 'Usuário deletado com sucesso' });
	}
}
