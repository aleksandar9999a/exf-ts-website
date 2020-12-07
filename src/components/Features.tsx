import ExF, { Component, CustomElement } from 'exf-ts';
import { IFeature } from '../interfaces/interfaces';
import { DataService } from './../services/DataService';


@CustomElement({
	selector: 'exf-features',
	dependencyInjection: true
})
export class Features extends Component {
	cards: IFeature[] = [];

	constructor(private dataService: DataService) {
		super();

		this.cards = dataService.features;
	}

	stylize() {
		return (
			<styles>
				.max-height {{ height: '85%' }}
			</styles>
		)
	}

	render() {
		return (
			<div>
				<section className="section has-background-link">
					<div className="container has-text-centered">
						<h2 className="title is-3 is-spaced has-text-white">Features</h2>

						<p className="subtitle is-6 has-text-white">
							ExF-TS combines different principles and technologies, thanks to which it acquired superpowers!
						</p>
					</div>
				</section>

				<section className="section">
					<div className="container is-max-desktop pl-5 pr-5 mt-2">
						<div className="columns is-flex-wrap-wrap is-justify-content-center">
							{this.cards.map(({ id, title, content }) => {
								return (
									<div id={id} className="column is-4">
										<div className="card pt-5 pl-4 pr-4 pb-3" style={{ height: '100%' }}>
											<div className="has-text-centered">
												<h3 className="title is-5 has-text-centered">
													{title}
												</h3>
											</div>

											<div className="card-content">
												{content}
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</section>
			</div>
		)
	}
}