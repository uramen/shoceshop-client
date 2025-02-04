import RestClient from './restClient';

export default class AjaxClient extends RestClient {
	constructor(options) {
		super(options);
		this.locale = 'en';
	}

	setLocale(locale) {
		this.locale = locale;
	}

	getConfig(method, data, cookie) {
		const config = {
			credentials: this.getCredentialsConfig(this.baseUrl),
			method,
			headers: {
				'Content-Type': 'application/json',
				'Accept-Language': this.locale
			}
		};

		if (cookie) {
			config.headers.Cookie = cookie;
		}

		if (data) {
			config.body = JSON.stringify(data);
		}
		return config;
	}

	getCredentialsConfig(baseUrl) {
		const includePrefix =
			baseUrl.includes('http://') || baseUrl.includes('https://');
		return includePrefix ? 'include' : 'same-origin';
	}
}
