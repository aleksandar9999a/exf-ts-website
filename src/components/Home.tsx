import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-home'
})
export class Home extends Component {

	render() {
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
}