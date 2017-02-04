//
// Shows the current wttr.in forecast on your desktop
//

_: (() => this.options = {
	
	city: '', // Berlin
	lang: '' // de
	
	// see wttr.io for API

})(),

command: `
    cd ./wttr.widget &&
	# echo 'loading…' &&
	{ # hide output

	  OPTIONS=${escape(JSON.stringify(this.options))} \
	  /usr/local/bin/node ./src/init-app;

	} &> npm-debug.log &&
	cat output.html
`,

refreshFrequency: 1000 * 60 * 20,

render: output => output,

style: `
	-webkit-font-smoothing: antialiased // nicer font rendering
	left: 20px;
	bottom: 100px;
	color: #efefef;
	font: 16px "DejaVu Sans Mono", Menlo, "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace;
	z-index: 999;

	a>*
		max-width: 200px
		max-height: 200px


`
