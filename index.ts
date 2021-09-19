import ky from 'https://unpkg.com/ky';

type Payload = {
	[key: string]: any;
};

export default async function callMe(payload: Payload): Promise<Payload> {
	await ky.post('https://stakkr.ngrok.io', {
		json: {
			payload,
		}
	});

	return payload;
}