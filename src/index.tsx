import 'core-js';
import './bulma.css';

import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Home } from './components/Home';

ExFModule({
	components: [
		App,
		Home
	],
	bootstraps: [
		App
	],
	root: 'root'
})

