import { Injectable } from "exf-ts";
import { IFeature } from "../interfaces/interfaces";

@Injectable()
export class DataService {
    features: IFeature[] = [
		{ id: 0, title: 'Web Components', content: 'This is a technology with which help I manage to combine the superpowers of technologies listed below.' },
		{ id: 2, title: 'Decorators', content: 'When I saw decorators for first time they seemed rather strange to me. But this doesn\'t make them bad.' },
		{ id: 5, title: 'TSX', content: 'It\'s actually JSX. ExF delivers a familiar syntax such as React.' },
		{ id: 1, title: 'Shadow DOM', content: 'Important part of ExF is encapsulation and here the Shadow DOM intervenes.' },
		{ id: 3, title: 'Virtual DOM', content: 'To make things easier, more sustainable and more dynamic, ExF uses Virtual Dom and updates only what is necessary.' },
		{ id: 4, title: 'VIrtual Styles', content: 'This is not something you could find on Google. Since it turned out to be great to be able to generate a Elements and then update them dynamically, so why not do the same with Styles?' },
	]
}