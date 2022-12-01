const permitions = {
	external: [
		'/',
		'/calendar',
		'/vacancies',
		'/tutorials',
		'/faq',
		'/auth/login',
		'/auth/register',
		'/auth/reset-password',
	],
	student: [
		'/',
		'/calendar',
		'/vacancies',
		'/tutorials',
		'/faq',
		'/profile',
		'/subscriptions',
	],
	monitor: [
		'/monitor/dashboard',
		'/monitor/reports',
		'/profile',
		',/tutorials',
	],
	teacher: [],
	admin: [],
};
export default permitions;
