// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	data: { data: string; label: string }[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		data: [
			{
				data: '27/08/2022',
				label: 'Publicação do edital',
			},
			{
				data: '27/08/2022',
				label: 'Publicação do edital',
			},
			{
				data: '27/08/2022',
				label: 'Publicação do edital',
			},
			{
				data: '27/08/2022',
				label: 'Publicação do edital',
			},
			{
				data: '27/08/2022',
				label: 'Publicação do edital',
			},
			{
				data: '27/08/2022',
				label: 'Publicação do edital',
			},
			{
				data: '27/08/2022',
				label: 'Publicação do edital',
			},
		],
	});
}
