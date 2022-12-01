import Axios from 'axios';
import { parseCookies } from 'nookies';

export const getApiClient = (ctx?: any) => {
	const { 'sgm-token': token } = parseCookies(ctx);

	const api = Axios.create({
		baseURL: ctx ? 'http://www.localhost:3000/api' : '/api',
	});

	if (token) {
		api.defaults.headers['Authorization'] = `Bearer ${token}`;
	}

	return api;
};
