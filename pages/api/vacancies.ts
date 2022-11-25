// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	data: {
		title: string;
		description: string;
		vacancies: {
			withScholarship: number;
			noScholarship: number;
		};
	}[];
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({
		data: [
			{
				title: 'Programação web II',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque quis ut eu aliquam arcu vestibulum nunc elementum nibh.',
				vacancies: {
					withScholarship: 2,
					noScholarship: 2,
				},
			},
			{
				title: 'Programação web II',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque quis ut eu aliquam arcu vestibulum nunc elementum nibh.',
				vacancies: {
					withScholarship: 2,
					noScholarship: 2,
				},
			},
			{
				title: 'Programação web II',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque quis ut eu aliquam arcu vestibulum nunc elementum nibh.',
				vacancies: {
					withScholarship: 2,
					noScholarship: 2,
				},
			},
			{
				title: 'Programação web II',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque quis ut eu aliquam arcu vestibulum nunc elementum nibh.',
				vacancies: {
					withScholarship: 2,
					noScholarship: 2,
				},
			},
			{
				title: 'Programação web II',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque quis ut eu aliquam arcu vestibulum nunc elementum nibh.',
				vacancies: {
					withScholarship: 2,
					noScholarship: 2,
				},
			},
			{
				title: 'Programação web II',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque quis ut eu aliquam arcu vestibulum nunc elementum nibh.',
				vacancies: {
					withScholarship: 2,
					noScholarship: 2,
				},
			},
			{
				title: 'Programação web II',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque quis ut eu aliquam arcu vestibulum nunc elementum nibh.',
				vacancies: {
					withScholarship: 2,
					noScholarship: 2,
				},
			},
		],
	});
}
