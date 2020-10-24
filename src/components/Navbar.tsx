import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-navbar'
})
export class Navbar extends Component {

	stylize() {
		return (
			<styles>
				<style>
                    @import "src/bulma.css";
                </style>

                <style>
                    .no-border {
                        { border: 'none' }
                    }
                </style>
			</styles>
		)
	}

	render() {
		return (
			<nav>
                <div className="container is-flex">
                    <div className="navbar-brand">
                        <span className="navbar-burger burger">
                            <span></span>
                            
                            <span></span>
                            
                            <span></span>
                        </span>
                    </div>
                    
                    <div className="navbar-menu">
                        <div className="navbar-end p-2">
                            <exf-router-link className="button is-primary is-inverted is-outlined mr-2 no-border" route="/">
                                Home
                            </exf-router-link>

                            <exf-router-link className="button is-primary is-inverted is-outlined mr-2 no-border" route="/documentation">
                                Documentation
                            </exf-router-link>

                            <exf-router-link className="button is-primary is-inverted is-outlined no-border" route="/github">
                                GitHub
                            </exf-router-link>
                        </div>
                    </div>
                </div>
            </nav>
		)
	}
}