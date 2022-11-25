import {
	AppstoreAddOutlined,
	AppstoreOutlined,
	CalendarOutlined,
	HomeOutlined,
	PlaySquareOutlined,
	QuestionCircleOutlined,
	UserOutlined,
	FileTextOutlined,
} from '@ant-design/icons';
import users from '../types/users';

const UserItems = {
	external: [
		{
			icon: HomeOutlined,
			label: 'Início',
			navTo: '/',
		},
		{
			icon: CalendarOutlined,
			label: 'Cronograma',
			navTo: 'calendar',
		},
		{
			icon: AppstoreOutlined,
			label: 'Vagas',
			navTo: 'vacancies',
		},
		{
			icon: PlaySquareOutlined,
			label: 'Tutoriais',
			navTo: 'tutorials',
		},
		{
			icon: QuestionCircleOutlined,
			label: 'Dúvidas frequentes',
			navTo: 'faq',
		},
	],
	student: [
		{
			icon: HomeOutlined,
			label: 'Início',
			navTo: '/',
		},
		{
			icon: FileTextOutlined,
			label: 'Minha Inscrição',
			navTo: 'subscription',
		},
		{
			icon: CalendarOutlined,
			label: 'Cronograma',
			navTo: 'calendar',
		},
		{
			icon: AppstoreOutlined,
			label: 'Vagas',
			navTo: 'vacancies',
		},
		{
			icon: PlaySquareOutlined,
			label: 'Tutoriais',
			navTo: 'tutorials',
		},
		{
			icon: QuestionCircleOutlined,
			label: 'Dúvidas frequentes',
			navTo: 'faq',
		},
		{
			icon: UserOutlined,
			label: 'Perfil de Usuário',
			navTo: 'profile',
		},
	],
	monitor: [
		{
			icon: HomeOutlined,
			label: 'Início',
			navTo: '/',
		},
		{
			icon: FileTextOutlined,
			label: 'Relatórios',
			navTo: 'reports',
		},
		{
			icon: PlaySquareOutlined,
			label: 'Tutoriais',
			navTo: 'tutorials',
		},
		{
			icon: QuestionCircleOutlined,
			label: 'Dúvidas frequentes',
			navTo: 'faq',
		},
		{
			icon: UserOutlined,
			label: 'Perfil de Usuário',
			navTo: 'profile',
		},
	],
	teacher: [],
	admins: [],
};

const getMenuItems = (userType: users) => {
	switch (userType) {
		case 'external':
			return UserItems.external;
		case 'student':
			return UserItems.student;
		case 'monitor':
			return UserItems.monitor;
		case 'teacher':
			return UserItems.teacher;
		case 'admin':
			return UserItems.admins;
		default:
			return UserItems.external;
	}
};
export default getMenuItems;
