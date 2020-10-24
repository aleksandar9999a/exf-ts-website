import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {

	stylize () {
		return (
			<styles>
				<style>
					@import "src/bulma.css";
				</style>
			</styles>
		)
	}

	render() {
		return (
			<div>
			</div>
		)
	}
}