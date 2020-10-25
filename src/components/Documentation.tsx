import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-docs'
})
export class Documentation extends Component {
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
			<div>Documentation</div>
		)
	}
}