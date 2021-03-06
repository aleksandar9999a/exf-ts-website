import './bulma.css';
import 'core-js';

import { ExFModule } from 'exf-ts';
import { RouterModule } from 'exf-router';

import { App } from './App';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Documentation } from './components/Documentation';
import { Features } from './components/Features';
import { SideMenu } from './components/SideMenu';

ExFModule({
	styles: [
		'@import "src/bulma.css"'
	],
	components: [
		App,
		Home,
		Navbar,
		Footer,
		Documentation,
		Features,
		SideMenu
	],
	modules: [
		RouterModule
	],
	bootstraps: [
		App
	],
	root: 'root'
})

