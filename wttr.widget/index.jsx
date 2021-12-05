//
// Shows the current wttr.in forecast on your desktop
//
//
// Change language and city with the two parameter below.
// check http://wttr.in/:translation for a list of available languanges.
//
//

export const lang = "fr";
export const city = "Paris";

export const refreshFrequency = 1000 * 60 * 30 // 30min

export const className = `
	// position on screen
	left: 15px;
	top: 170px;

	position: fixed;
	-webkit-font-smoothing: antialiased; // nicer font rendering
	color: #efefef;

	pre
		font: 7px "DejaVu Sans Mono", Menlo, "Lucida Sans Typewriter", "Lucida Console", monaco, "Bitstream Vera Sans Mono", monospace;

`;

export const command = `
	cd wttr.widget &&
	curl -s ${lang}.wttr.in/${city}\?0tq |
	./terminal-to-html.sh
`;


export const render = props => props.error ? props.error :
	<div>
			<link rel="stylesheet" href="wttr.widget/terminal-colors.css" />
			<pre dangerouslySetInnerHTML={{
				__html: props.output.split('\n').slice(0, 24).join('\n')
			}} />
	</div>


render: out => `
	<link rel="stylesheet" href="wttr.widget/terminal-colors.css" />
	<pre>${out.err || out.data.split('\n').slice(1, 7).join('\n')}</pre>
`
