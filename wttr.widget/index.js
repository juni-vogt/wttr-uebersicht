//
// Shows the current wttr.in forecast on your desktop
//

options: {
	city: 'newyork', // one word
	lang: 'en', // country code
},

refreshFrequency: 1000 * 60 * 30, // 30min

style: `
	// position on screen
	bottom: 40px;
	left: 20px;

	position: fixed;
	-webkit-font-smoothing: antialiased; // nicer font rendering
	color: #efefef;

	pre
		font: 16px "DejaVu Sans Mono", Menlo, "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace;

`,

command: function(cb) {
	// this part is unnecessarily complicated because I wanted to have an
	// options property

	const cmd = `
		cd wttr.widget &&
		curl -s wttr.in/${this.options.city}?lang=${this.options.lang} |
		./terminal-to-html
	`;
	// see https://github.com/chubin/wttr.in for API
	// uses https://github.com/buildkite/terminal

	this.run(cmd, (err, data) => {
		cb(this.render({ err, data }))
	})
},

render: out => `
	<link rel="stylesheet" href="wttr.widget/terminal-colors.css" />
	<pre>${out.err || out.data.split('\n').slice(1, 7).join('\n')}</pre>
`
