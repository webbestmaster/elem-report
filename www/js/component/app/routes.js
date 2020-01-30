// @flow

import {Home} from '../../page/client/home/c-home';
import {PageNotFound} from '../../page/client/page-not-found/c-page-not-found';
import {PageWrapper} from '../page-wrapper/c-page-wrapper';

import {routePathMap} from './routes-path-map';
import {starPath} from './render-route/render-route-const';

export const routeItemPage404 = {
    path: starPath,
    component: PageNotFound,
    type: 'route',
    id: 'page-404',
    pageWrapper: PageWrapper,
};

export const routeItemMap = {
    // client
    siteEnter: {
        path: routePathMap.siteEnter.path + 'wife/elem-report/',
        component: Home,
        type: 'route',
        pageWrapper: PageWrapper,
    },
};
