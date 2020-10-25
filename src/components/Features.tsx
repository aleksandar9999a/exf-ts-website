import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-features'
})
export class Features extends Component {
	cards: { id: number | string, title: string, content: string }[] = [
		{ id: 0, title: 'Web Components', content: 'This is a technology with which help I manage to combine the superpowers of technologies listed below.' },
		{ id: 2, title: 'Decorators', content: 'When I saw decorators for first time they seemed rather strange to me. But this doesn\'t make them bad.' },
		{ id: 5, title: 'TSX', content: 'It\'s actually JSX. ExF delivers a familiar syntax such as React.' },
		{ id: 1, title: 'Shadow DOM', content: 'Important part of ExF is encapsulation and here the Shadow DOM intervenes.' },
		{ id: 3, title: 'Virtual DOM', content: 'To make things easier, more sustainable and more dynamic, ExF uses Virtual Dom and updates only what is necessary.' },
		{ id: 4, title: 'VIrtual Styles', content: 'This is not something you could find on Google. Since it turned out to be great to be able to generate a Elements and then update them dynamically, so why not do the same with Styles?' },
	]

	stylize() {
		return (
			<styles>
				<style>
                    @import "src/bulma.css";
                </style>

				<style>
					.max-height {{ height: '85%' }}
				</style>
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
									<div id={id} className="column is-3">
										<div className="card pt-5 pl-4 pr-4 pb-2 max-height">
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