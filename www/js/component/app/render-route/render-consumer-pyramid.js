// @flow

/* eslint-disable max-len */

import React, {type Node} from 'react';

import type {ContextRouterType} from '../../../type/react-router-dom-v5-type-extract';
import {ThemeContextConsumer} from '../../../provider/theme/c-theme-context';
import type {ThemeContextType} from '../../../provider/theme/theme-context-type';
import {SnackbarContextConsumer} from '../../../provider/snackbar/c-snackbar-context';
import type {SnackbarContextType} from '../../../provider/snackbar/snackbar-context-type';
import {PopupContextConsumer} from '../../../provider/popup/c-popup-context';
import type {PopupContextType} from '../../../provider/popup/popup-context-type';
import {ScreenContextConsumer} from '../../../provider/screen/c-screen-context';
import type {ScreenContextType} from '../../../provider/screen/screen-context-type';

import type {RenderPageInputDataType, RouteItemType} from './render-route-type';
import {renderPage} from './render-route-page';

export function renderConsumerPyramid(routeItem: RouteItemType, contextRouterData: ContextRouterType): Node {
    const {match, history, location, staticContext} = contextRouterData;

    return (
        <ScreenContextConsumer>
            {(screenContextData: ScreenContextType): Node => {
                return (
                    <ThemeContextConsumer>
                        {(themeContextData: ThemeContextType): Node => {
                            return (
                                <SnackbarContextConsumer>
                                    {(snackbarContextData: SnackbarContextType): Node => {
                                        return (
                                            <PopupContextConsumer>
                                                {(popupContextData: PopupContextType): Node => {
                                                    const pageInputData: RenderPageInputDataType = {
                                                        location,
                                                        history,
                                                        match,
                                                        popupContextData,
                                                        snackbarContextData,
                                                        themeContextData,
                                                        staticContext,
                                                        screenContextData,
                                                    };

                                                    return renderPage(pageInputData, routeItem);
                                                }}
                                            </PopupContextConsumer>
                                        );
                                    }}
                                </SnackbarContextConsumer>
                            );
                        }}
                    </ThemeContextConsumer>
                );
            }}
        </ScreenContextConsumer>
    );
}
