import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import ExF, { Component, CustomElement } from 'exf-ts';
import { RouterService } from './services/RouterService';


@CustomElement({
	selector: 'exf-app',
	dependencyInjection: true
})
export class App extends Component {
	routes: IRoute[] = []

	constructor(private routerService: RouterService) {
		super();

		this.routes = routerService.routes;
	}

	stylize() {
		return (
			<styles>
				exf-navbar {
					{
						position: 'absolute',
						left: '0',
						right: '0',
						top: '0',
						'z-index': '2'
					}
				}

				.wrapper {
					{
						'min-height': '95vh'
					}
				}
			</styles>
		)
	}

	render() {
		return (
			<div className="has-background-light is-relative">
				<exf-navbar />

				<div className="wrapper">
					<exf-router routes={this.routes} />
				</div>

				<exf-footer />
			</div>
		)
	}
}