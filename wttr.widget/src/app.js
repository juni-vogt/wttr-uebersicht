const fetch = require('node-fetch');
const AnsiToHtml = require('ansi-to-html');

const log = (...args) => console.log('wttr:', ...args)

const app = module.exports = {

	options: {
		// defaults
	},

	constructor(options) {
		this.options = Object.assign(this.options, options);
		log('options', this.options);

		const converter = new AnsiToHtml();

		return fetch(
			`http://wttr.in/${this.options.city}${
				this.options.lang ? `?lang=${this.options.lang}` : ''
			}`
		)
		.then(res => res.text())
		.then(body => body.split('\n').slice(1, 7).join('\n'))
		.then(body => converter.toHtml(body))
		.then(html => `<pre>${html}</pre>`)
		.catch(e => console.error('couldn\'t load weather', e))

	}
}
