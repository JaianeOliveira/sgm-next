export interface user {
	email: string;

	userRole: 'student' | 'monitor' | 'teacher' | 'admin';
	name: string;
	avatar: string | null;
}

interface user_db extends user {
	password: string;
}

const dummy_users: user_db[] = [
	{
		email: 'student@email.com',
		password: 'student',
		userRole: 'student',
		name: 'João Victor',
		avatar:
			'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
	},
	{
		email: 'monitor@email.com',
		password: 'monitor',
		userRole: 'monitor',
		name: 'Maria Santos',
		avatar:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
	},
	{
		email: 'teacher@email.com',
		password: 'teacher',
		userRole: 'teacher',
		name: 'João Santos',
		avatar: null,
	},
	{
		email: 'admin@email.com',
		password: 'admin',
		userRole: 'admin',
		name: 'Luiz Alves',
		avatar: null,
	},
];

export default dummy_users;
