import fetch from 'cross-fetch';
import RestClient from './restClient';

export default class ApiClient extends RestClient {
	constructor(options) {
		this.locale = 'en';
	}

	setLocale(locale) {
		this.locale = locale;
	}

	static authorize = (baseUrl, email) => {
		const config = {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': this.locale
			},
			body: JSON.stringify({ email })
		};
		return fetch(`${baseUrl}/authorize`, config).then(
			RestClient.returnStatusAndJson
		);
	};
}
