// @flow

import React, {Component, type Node} from 'react';
import {Link} from 'react-router-dom';

import homeStyle from './home.scss';

type PropsType = {};

type StateType = null;

export class Home extends Component<PropsType, StateType> {
    componentDidMount() {
        console.log('---> Component Home did mount');
    }

    render(): Node {
        return <h1>home</h1>;
    }
}
