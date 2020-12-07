import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-sidemenu'
})
export class SideMenu extends Component {
	render() {
		return (
			<aside className="menu">
                <p className="menu-label">
                    Getting Started
                </p>
                
                <ul className="menu-list">
                    <li>
                        <a className="is-active">Why</a>
                    </li>
                
                    <li>
                        <a>Installation</a>
                    </li>

                    <li>
                        <a>Hello World</a>
                    </li>
                </ul>
                
                <p className="menu-label">
                    Main Concepts
                </p>
                
                <ul className="menu-list">
                    <li>
                        <a>Components</a>
                    </li>
                    
                    <li>
                        <a>Decorators</a>
                    </li>

                    <li>
                        <a>Handling Events</a>
                    </li>

                    <li>
                        <a>Conditional Rendering</a>
                    </li>

                    <li>
                        <a>List Rendering</a>
                    </li>

                    <li>
                        <a>Lifecycle Hooks</a>
                    </li>
                    
                    <li>
                        <a>Dependency Injection</a>
                    </li>
                </ul>
                
                <p className="menu-label">
                    Best Practices
                </p>
                
                <ul className="menu-list">
                    <li>
                        <a></a>
                    </li>
                </ul>
            </aside>
		)
	}
}