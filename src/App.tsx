import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import ExF, { Component, CustomElement } from 'exf-ts';

const routes = [
	{ component: 'exf-home', path: '/' }
]

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	routes: IRoute[] = []

	constructor() {
		super()

		this.routes = routes
	}

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
			<div className="has-background-light">
				<exf-navbar />

				<exf-router routes={this.routes} />

				<exf-footer />
			</div>
		)
	}
}