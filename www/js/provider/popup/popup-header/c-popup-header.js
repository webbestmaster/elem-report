// @flow

import React, {Component, type Node} from 'react';

import type {CloseButtonPropsType} from '../popup-header-close-button/c-popup-header-close-button';
import {PopupHeaderCloseButton} from '../popup-header-close-button/c-popup-header-close-button';

import popupHeaderStyle from './popup-header.scss';

type PropsType = {|
    +closeButton?: CloseButtonPropsType,
    +children: Node,
|};

export type PassedPopupHeaderPropsType = PropsType;

type StateType = {};

export class PopupHeader extends Component<PropsType, StateType> {
    renderCloseButton(): Node {
        const {props} = this;
        const {closeButton} = props;

        if (!closeButton) {
            return null;
        }

        const {onClick} = closeButton;

        return <PopupHeaderCloseButton onClick={onClick}/>;
    }

    render(): Node {
        const {props} = this;

        return (
            <header className={popupHeaderStyle.popup_header}>
                <div className={popupHeaderStyle.popup_header_content}>{props.children}</div>
                {this.renderCloseButton()}
            </header>
        );
    }
}
