export type UserRole = 'external' | 'student' | 'monitor' | 'teacher' | 'admin';

export type UserInput = {
	email?: string;
	name?: string;
	password?: string;
	registrationNumber?: string;
	userRole?: string;
	avatar?: string | null;
};
