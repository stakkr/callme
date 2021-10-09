import ky from "https://cdn.skypack.dev/ky?dts";

type Payload = {
	[key: string]: any;
};

async function callMe(payload: Payload): Promise<Payload> {
	await ky.post("https://stakkr.ngrok.io", {
		json: {
			payload,
		},
	});

	return payload;
}

module.exports = {
	callMe,
};
