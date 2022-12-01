import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from './enviroments';

// JWT
export const newJwt = (data: any, expiresIn = 60 * 60) => {
	return jwt.sign(
		{
			...data,
		},
		JWT_SECRET,
		{
			expiresIn,
		}
	);
};

export const verifyJwt = (token: string) => {
	return jwt.verify(token, JWT_SECRET);
};

export const decodeJwt = (token: string) => {
	return jwt.decode(token);
};

// bcrypt
export const hashGenerator = (value: string, salt = 8): Promise<string> => {
	return bcrypt.hash(value, salt);
};

export const hashCompare = (value: string, hash: string): Promise<boolean> => {
	return bcrypt.compare(value, hash);
};
