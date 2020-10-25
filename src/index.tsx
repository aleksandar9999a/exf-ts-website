import 'core-js';
import './bulma.css';

import { ExFModule } from 'exf-ts';
import { RouterModule } from 'exf-router';

import { App } from './App';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Documentation } from './components/Documentation';
import { Features } from './components/Features';

ExFModule({
	components: [
		App,
		Home,
		Navbar,
		Footer,
		Documentation,
		Features
	],
	modules: [
		RouterModule
	],
	bootstraps: [
		App
	],
	root: 'root'
})

