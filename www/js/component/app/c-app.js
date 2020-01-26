// @flow

/* global window */

import React, {type Node} from 'react';
import {BrowserRouter} from 'react-router-dom';

import {ClientApp} from './c-client-app.js';

export function App(): Node {
    return (
        <BrowserRouter>
            <ClientApp/>
        </BrowserRouter>
    );
}
