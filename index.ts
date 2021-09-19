import ky from 'https://cdn.skypack.dev/ky?dts';

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