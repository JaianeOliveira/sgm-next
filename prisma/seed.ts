import { Prisma } from '@prisma/client';
import prisma from '../services/prisma';
import { hashGenerator } from '../utils';

async function main() {
	const admin = await prisma.user.upsert<Prisma.UserUpsertArgs>({
		where: { email: 'admin@email.com' },
		update: {},
		create: {
			email: 'admin@email.com',
			registration_number: '198239123',
			name: 'Admin',
			password_hash: await hashGenerator('admin'),
			user_type: 'teacher',
			teacher: {
				create: {
					is_admin: true,
				},
			},
		},
	});

	const teacher = await prisma.user.upsert<Prisma.UserUpsertArgs>({
		where: { email: 'teacher@email.com' },
		update: {},
		create: {
			email: 'teacher@email.com',
			registration_number: '234901231',
			name: 'Professor',
			password_hash: await hashGenerator('teacher'),
			user_type: 'teacher',
			teacher: {
				create: {
					is_admin: false,
				},
			},
		},
	});

	const monitor = await prisma.user.upsert<Prisma.UserUpsertArgs>({
		where: {
			email: 'monitor@email.com',
		},
		update: {},
		create: {
			email: 'monitor@email.com',
			registration_number: '8173918203',
			name: 'Monitor',
			password_hash: await hashGenerator('monitor'),
			user_type: 'student',
			student: {
				create: {
					is_monitor: true,
					teacher_email: 'teacher@email.com',
				},
			},
		},
	});

	const student = await prisma.user.upsert<Prisma.UserUpsertArgs>({
		where: {
			email: 'student@email.com',
		},
		update: {},
		create: {
			email: 'student@email.com',
			registration_number: '1023012312',
			name: 'Estudante',
			user_type: 'student',
			password_hash: await hashGenerator('student'),
			student: {
				create: {
					is_monitor: false,
				},
			},
		},
	});

	console.log('Banco populado', {
		users: { admin, teacher, monitor, student },
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
