import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-features'
})
export class Features extends Component {

	stylize() {
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
                features
			</div>
		)
	}
}