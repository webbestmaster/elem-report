// @flow

/* eslint-disable react/no-multi-comp */

import React, {Component, type Node} from 'react';

import {isBoolean} from '../../lib/is';

type ColorType = '#FF9A71' | '#FFDFD2' | '#4DAC83' | '#AC363C';

type FontPropsType = {|
    +color: ColorType,
    +children: Node,
    +isBold?: boolean,
|};

function Font(props: FontPropsType): Node {
    const {color, isBold, children} = props;

    const content = <font color={color}>{children}</font>;

    if (isBoolean(isBold) && isBold === true) {
        return <b>{content}</b>;
    }

    return content;
}

type FontColorPropsType = {|
    +children: Node,
    +isBold?: boolean,
|};

export function FontColorHeader(props: FontColorPropsType): Node {
    const {children, isBold} = props;

    return (
        <Font color="#FF9A71" isBold={isBold}>
            {children}
        </Font>
    );
}

export function FontColorText(props: FontColorPropsType): Node {
    const {children, isBold} = props;

    return (
        <Font color="#FFDFD2" isBold={isBold}>
            {children}
        </Font>
    );
}

export function FontColorPositive(props: FontColorPropsType): Node {
    const {children, isBold} = props;

    return (
        <Font color="#4DAC83" isBold={isBold}>
            {children}
        </Font>
    );
}

export function FontColorNegative(props: FontColorPropsType): Node {
    const {children, isBold} = props;

    return (
        <Font color="#AC363C" isBold={isBold}>
            {children}
        </Font>
    );
}
