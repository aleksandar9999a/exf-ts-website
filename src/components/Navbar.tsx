import ExF, { Component, CustomElement } from 'exf-ts';
import { INavbarItem } from '../interfaces/interfaces';
import { RouterService } from '../services/RouterService';

@CustomElement({
    selector: 'exf-navbar',
    dependencyInjection: true
})
export class Navbar extends Component {
    navbarItems: INavbarItem[] = [];

    constructor(routerService: RouterService) {
        super();

        this.navbarItems = routerService.navbarItems;
    }
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
                            {this.navbarItems.map(({ id, route, title }) => {
                                return (
                                    <exf-router-link id={id} className="button is-primary is-inverted is-outlined mr-2 no-border" route={route}>
                                        {title}
                                    </exf-router-link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </nav>
		)
	}
}