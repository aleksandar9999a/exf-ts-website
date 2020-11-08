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

						<p className="subtitle is-6 has-text-white">
							You can't get your superpowers if you don't read!
						</p>
					</div>
				</section>

				<div className="container mt-6 mb-6">
					<div className="columns">
						<div className="col mr-5">
							<exf-sidemenu />
						</div>

						<div className="col">
							Work
						</div>
					</div>
				</div>
			</div>
		)
	}
}