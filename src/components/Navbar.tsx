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
			</styles>
		)
	}

	render() {
		return (
			<nav class="navbar is-info is-bold">
                <div class="container">
                    <div class="navbar-brand">
                        <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                            <span></span>
                            
                            <span></span>
                            
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroB" class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item is-active">
                                Home
                            </a>
                            
                            <a class="navbar-item">
                                Documentation
                            </a>
                            
                            <a class="navbar-item">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
		)
	}
}