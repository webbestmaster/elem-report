// @flow

/* global navigator */

import React, {Component, Fragment, type Node} from 'react';

import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';
import {FontColorHeader, FontColorText} from '../guild-statistics/c-font-color';
import type {SnackbarContextType} from '../../provider/snackbar/snackbar-context-type';
import {intWithSpaces} from '../guild-statistics/guild-statistics-helper';
import guildStatisticsStyle from '../guild-statistics/guild-statistics.scss';

type PropsType = {|
    +snackbarContext: SnackbarContextType,
    +report: {|
        +before: ReportDataType,
        +after: ReportDataType,
    |},
|};

type StateType = {|
    +wrapperRef: {current: HTMLElement | null},
|};

export class TopDeck extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            wrapperRef: React.createRef<HTMLElement>(),
        };
    }

    getReport(): {|before: ReportDataType, +after: ReportDataType|} {
        const {props} = this;
        const {report} = props;
        const {before, after} = report;

        return {before, after};
    }

    renderManListItem = (man: GuildManDataType, index: number, oldManList: Array<GuildManDataType>): Node => {
        const oldMan = oldManList.find((oldManInList: GuildManDataType): boolean => oldManInList.id === man.id);

        const deltaIndex = oldMan ? oldManList.indexOf(oldMan) - index : 0;

        // const arrow = deltaIndex !== 0 ? ` - ${deltaIndex > 0 ? '⤒' : '⤓'}` : ''
        const arrow = deltaIndex > 0 ? ' - ⇧' : '';

        return (
            <Fragment key={man.id}>
                {index + 1}. {man.name} [{intWithSpaces(man.deckValue)}]{arrow}
                <br/>
            </Fragment>
        );
    };

    renderManList(): Node {
        const {before, after} = this.getReport();

        const newManList = [...after.manList].sort((manA: GuildManDataType, manB: GuildManDataType): number => {
            return manB.deckValue - manA.deckValue;
        });

        const oldManList = [...before.manList].sort((manA: GuildManDataType, manB: GuildManDataType): number => {
            return manB.deckValue - manA.deckValue;
        });

        return (
            <FontColorText>
                {newManList.map((man: GuildManDataType, index: number): Node => {
                    return this.renderManListItem(man, index, oldManList);
                })}
            </FontColorText>
        );
    }

    handleGetHtml = async () => {
        const {state, props} = this;
        const {snackbarContext} = props;
        const {wrapperRef} = state;
        const wrapperNode = wrapperRef.current;

        if (!wrapperNode) {
            console.error('TopDeck.handleGetHtml: Can not get wrapperRef.current');
            return;
        }

        const htmlCode = wrapperNode.innerHTML;

        console.log(htmlCode);

        navigator.clipboard
            .writeText(htmlCode)
            .then((): mixed => {
                return snackbarContext.showSnackbar(
                    {children: 'HTML code has been copied!', variant: 'success'},
                    'success-id'
                );
            })
            .catch((): mixed => {
                return snackbarContext.showSnackbar({children: 'Error!', variant: 'error'}, 'error-id');
            });
    };

    render(): Node {
        const {state} = this;

        return (
            <>
                <button onClick={this.handleGetHtml} type="button">
                    [ Get HTML code ]
                </button>
                <hr/>
                <div className={guildStatisticsStyle.guild_statistics__wrapper} ref={state.wrapperRef}>
                    <center>
                        <FontColorHeader isBold>꧁ ТОП КОЛОД ꧂</FontColorHeader>
                        <br/>
                        <br/>
                        {this.renderManList()}
                    </center>
                </div>
            </>
        );
    }
}
