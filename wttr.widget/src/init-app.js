const fs = require('fs');

const app = module.exports = require('./app');

const options = process.env.OPTIONS ?
	JSON.parse(unescape(process.env.OPTIONS)) : {};

// expects the constructor to return a promise with the output HTML
app.constructor(options)
.then(args => { console.log('output html:', args); return args;})
.then(HTML =>
	fs.writeFile('output.html', HTML, err => {
		if (err) {
			console.error('Error writing output HTML file. However that happened.');
			throw err;
		}
		// console.log('Wrote output HTML file');
	})
)
