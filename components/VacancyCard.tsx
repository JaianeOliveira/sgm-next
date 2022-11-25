import { Button, Card, List, Space } from 'antd';
import React from 'react';
import Container from '../components/common/Container';

type VacancyCardProps = {
	title: string | React.ReactNode;
	width?: number;
	description?: string | React.ReactNode;
	vacancies?: {
		withScholarship: number;
		noScholarship: number;
	};
	linkToDetails?: string;
	linkToSubscribe?: string;
};

const VacancyCard = ({
	title,
	description,
	vacancies = {
		withScholarship: 0,
		noScholarship: 0,
	},
	width = 320,
	linkToDetails,
	linkToSubscribe,
}: VacancyCardProps) => {
	return (
		<Card title={title} style={{ width: width }}>
			<p>{description}</p>

			<List bordered size="small" header={<h4>Vagas</h4>}>
				<List.Item>
					<Container justify="space-between" direction="row">
						<span>Com bolsa</span>
						<span>{vacancies.withScholarship}</span>
					</Container>
				</List.Item>
				<List.Item>
					<Container justify="space-between" direction="row">
						<span>Voluntário</span>
						<span>{vacancies.noScholarship}</span>
					</Container>
				</List.Item>
			</List>

			<Container justify="space-between" direction="row" margin="1rem 0 0 0">
				<Button>Ver detalhes</Button>
				<Button type="primary">Se inscrever</Button>
			</Container>
		</Card>
	);
};

export default VacancyCard;
