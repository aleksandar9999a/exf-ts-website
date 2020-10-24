import ExF, { Component, CustomElement } from 'exf-ts';
import logo from './../assets/logo.png'

const code = `CustomElement({ 
    selector: 'exf-app’ 
}) 
class App extends Component { 
    @Props() top: number = 0; 
    @State() bg: string = '#fff’; 
    name: string = ‘ExF’;

    stylize() { 
        return ( 
            <style> 
                app { { top: \${this.top}px } } 
                app { { 'background': this.bg } } 
          </style> 
        ) 
    } 

    render() {
        return ( 
            <div className="app">
                <h1>{this.name}</h1> 
                <p>Current position is: {this.top}px</p> 
                <p>Current background is: {this.bg}</p> 
            </div> 
        ) 
    } 
} 
`

@CustomElement({
	selector: 'exf-home'
})
export class Home extends Component {

	stylize() {
		return (
			<styles>
				<style>
                    @import "src/bulma.css";
                </style>

				<style>
					.max-height {
						{
							'height': '100%'
						}
					}

					.small-height {
						{
							'max-height': '340px'
						}
					}
				</style>
			</styles>
		)
	}

	render() {
		return (
			<div>
				<section className="hero is-info is-bold">
					<div className="hero-body container">
						<div className="columns is-justify-content-center">
							<div className="column left is-5-desktop">
								<img src={logo} alt="logo" />
							</div>

							<div className="column is-flex right is-5-desktop">
								<div style={{ margin: 'auto' }}>
									<h1 className="title is-size-2-mobile is-1 is-spaced has-text-white">
									Web Components <br /> on Steroids!
									</h1>

									<h2 className="subtitle is-5 has-text-white">
										Get your superpowers!
									</h2>

									<div>
										<button className="button is-primary is-rounded">Get Started</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section pb-6">
					<div className="container has-text-centered">
						<h2 className="title mb-2">Super Powers</h2>

						<div className="p-5"></div>
						
						<div className="container is-max-desktop pl-5 pr-5 mt-2">
							<div className="columns">
								<div className="column">
									<div className="card pt-5 pl-4 pr-4 max-height">
										<div className="has-text-centered">
											<h3 className="title is-5 has-text-centered">
												Easy to use
											</h3>
										</div>
										
										<div className="card-content">
											ExF uses already known technologies such as JSX and TypeScript to be as easy to use as possible.
										</div>
									</div>
								</div>

								<div className="column">
									<div className="card pt-5 pl-4 pr-4 max-height">
										<div className="has-text-centered">
											<h3 className="title is-5 has-text-centered">
												Reusable
											</h3>
										</div>
										
										<div className="card-content">
											Thanks to Web Components, ExF provides a fully compatible interface so that it can work in combination with other technologies.
										</div>
									</div>
								</div>

								<div className="column">
									<div className="card pt-5 pl-4 pr-4 max-height">
										<div className="has-text-centered">
											<h3 className="title is-5 has-text-centered">
												Performance
											</h3>
										</div>
										
										<div className="card-content">
											ExF is a minimalist compiler, so it contains only what you need to work properly. Combined with Virtual DOM, it becomes an extremely fast tool.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section has-background-info mt-5">
					<div className="container has-text-centered">
						<h2 class="title has-text-white">Have you tried it yet?</h2>
						
						<div>
							<button className="button is-primary is-rounded">Get Started</button>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="container">
						<div className="card p-5">
							<div className="card-body">
								<div className="columns is-justify-content-center">
									<div className="column left is-4">
										<h2 className="title is-3 is-spaced mb-6">
											Simple Component
										</h2>

										<p className="subtitle is-6">
											ExF is component based, and one of its main goals is to create a fully encapsulated component containing everything related to it.
										</p>

										<p className="subtitle is-6">
											Another goal is to provide an easier way to dynamically style.
										</p>

										<p className="subtitle is-6">
											Also, the components are completely reusable, which means that they are used in exactly the same way as normal HTML Elements.
										</p>
									</div>

									<div className="column right is-6">
										<pre className="s-size-1-mobile is-6 small-height p-3">
											{code}
										</pre>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}