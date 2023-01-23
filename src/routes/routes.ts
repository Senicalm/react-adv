import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";


interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element),
    name: string
}


const lazyLayout = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/layout/LazyLayout'));


export const routes:Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: lazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
   
]