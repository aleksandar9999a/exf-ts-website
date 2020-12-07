import ExF, { Component, CustomElement } from 'exf-ts';
import { INavbarItem } from '../interfaces/interfaces';
import { RouterService } from '../services/RouterService';

@CustomElement({
    selector: 'exf-navbar',
    dependencyInjection: true
})
export class Navbar extends Component {
    navbarItems: INavbarItem[] = [];

    constructor(private routerService: RouterService) {
        super();

        this.navbarItems = routerService.navbarItems;
    }
	stylize() {
		return (
			<styles>
                .no-border {
                    { border: 'none' }
                }
			</styles>
		)
	}

	render() {
		return (
			<nav>
                <div className="container is-flex">
                    <div className="navbar-brand">
                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            
                            <span aria-hidden="true"></span>
                            
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    
                    <div id="navbarBasicExample" className="navbar-menu">
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