import p from 'https://unpkg.com/phin';

type Payload = {
	[key: string]: any;
};

export default async function callMe(payload): Promise<Payload> {
	await p({
		url: 'https://stakkr.ngrok.io',
		method: 'POST',
		parse: 'json',
		headers: {
			'Content-Type': 'application/json',
		},
		body: {
			payload,
		}
	});

	return payload;
}