import prisma from '../services/prisma';
import { hashGenerator } from '../utils/passwordHash';

async function main() {
	const admin = await prisma.user.upsert({
		where: { email: 'admin@email.com' },
		update: {},
		create: {
			email: 'admin@email.com',
			name: 'Admin',
			registrationNumber: '2022000000',
			password_hash: await hashGenerator('admin'),
			userRole: 'admin',
		},
	});

	const teacher = await prisma.user.upsert({
		where: { email: 'teacher@email.com' },
		update: {},
		create: {
			email: 'teacher@email.com',
			name: 'Teacher',
			registrationNumber: '2022000001',
			password_hash: await hashGenerator('teacher'),
			userRole: 'teacher',
		},
	});

	const monitor = await prisma.user.upsert({
		where: { email: 'monitor@email.com' },
		update: {},
		create: {
			email: 'monitor@email.com',
			name: 'Monitor',
			registrationNumber: '2022000002',
			password_hash: await hashGenerator('monitor'),
			userRole: 'monitor',
		},
	});

	const student = await prisma.user.upsert({
		where: { email: 'student@email.com' },
		update: {},
		create: {
			email: 'student@email.com',
			name: 'Student',
			registrationNumber: '2022000003',
			password_hash: await hashGenerator('student'),
			userRole: 'student',
		},
	});

	console.log('Banco populado', {
		users: {
			admin,
			teacher,
			monitor,
			student,
		},
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
