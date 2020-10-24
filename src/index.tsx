import 'core-js';
import './bulma.css';

import { ExFModule } from 'exf-ts';
import { Router, RouterLink } from 'exf-router';

import { App } from './App';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

ExFModule({
	components: [
		App,
		Home,
		Navbar,
		Router,
		RouterLink,
		Footer
	],
	bootstraps: [
		App
	],
	root: 'root'
})

