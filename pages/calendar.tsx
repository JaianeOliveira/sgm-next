import { List, notification, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import Container from '../components/common/Container';
import api from '../utils/api';

const Calendar = () => {
	const [calendar, setCalendar] = useState<{ data: string; label: string }[]>(
		[]
	);

	const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true)
        await api.get('/calendar')
    }

	useEffect(() => {
		try {
			api.get('/calendar').then((response) => setCalendar(response.data));
		} catch (err) {
			notification.error({
				message: 'Algo deu errado',
			});
		}
	}, []);

	return (
		<>
			<Container align="flex-start" justify="flex-start" margin="0 0 1rem 0">
				<h2>Cronograma</h2>
			</Container>
			<List>
				{calendar.map((item) => (
					<List.Item>
						<List.Item.Meta title={<span>{item.label}</span>} />
						<div>{item.data}</div>
					</List.Item>
				))}
			</List>
		</>
	);
};

export default Calendar;
