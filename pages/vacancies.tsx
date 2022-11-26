import { Card, notification, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import VacancyCard from '../components/VacancyCard';
import MainLayout from '../layout/main';
import api from '../utils/api';

const Vacancies = () => {
	const [vacancies, setVacancies] = useState<
		{
			title: string;
			description: string;
			vacancies: {
				withScholarship: number;
				noScholarship: number;
			};
		}[]
	>();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		try {
			api.get('/vacancies').then((response) => setVacancies(response.data));
		} catch (err) {
			notification.error({
				message: 'Algo deu errado',
			});
		}
	}, []);

	return (
		<MainLayout>
			<h2>Vagas</h2>
			<div>
				<Space size={[32, 64]} wrap>
					{vacancies?.map((item, index) => (
						<VacancyCard
							key={index}
							title={item.title}
							description={item.description}
							vacancies={item.vacancies}
						/>
					))}
				</Space>
			</div>
		</MainLayout>
	);
};

export default Vacancies;
