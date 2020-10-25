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
			<div>
				<section className="section has-background-info">
					<div className="container has-text-centered">
						<h2 className="title is-3 is-spaced has-text-white">Documentation</h2>
					</div>
				</section>
			</div>
		)
	}
}