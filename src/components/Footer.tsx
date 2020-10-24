import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-footer'
})
export class Footer extends Component {
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
			<footer class="footer has-background-light has-text-centered p-4">
				<p>
					<strong>ExF-TS</strong> by Alexander Todorov. The source code is licensed 
					
					<a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
				</p>
            </footer>
		)
	}
}