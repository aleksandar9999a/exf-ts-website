import { IRoute } from "exf-router/lib/interfaces/interfaces";
import { Injectable } from "exf-ts";
import { INavbarItem } from "../interfaces/interfaces";

@Injectable()
export class RouterService {
    routes: IRoute[] = [
        { component: 'exf-home', path: '/' },
        { component: 'exf-docs', path: '/docs' },
        { component: 'exf-features', path: '/features' }
    ]

    navbarItems: INavbarItem[] = [
        { id: 1, route: '/', title: 'Home' },
        { id: 2, route: '/features', title: 'Features' },
        { id: 3, route: '/docs', title: 'Docs' },
    ]
}