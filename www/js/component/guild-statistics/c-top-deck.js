// @flow

import React, {Component, Fragment, type Node} from 'react';

import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';

import {FontColorHeader, FontColorText} from './c-font-color';
import {htmlToBbCode, intWithSpaces} from './guild-statistics-helper';
import guildStatisticsStyle from './guild-statistics.scss';

type PropsType = {|
    +report: {|
        +before: ReportDataType,
        +after: ReportDataType,
    |},
|};

type StateType = {|
    +wrapperRef: {current: HTMLElement | null},
    +bbCode: string,
|};

export class TopDeck extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            wrapperRef: React.createRef<HTMLElement>(),
            bbCode: '',
        };
    }

    componentDidMount() {
        this.refreshBbCode();
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        const currentBbCode = this.getBbCode();

        if (prevState.bbCode !== currentBbCode) {
            this.refreshBbCode();
        }
    }

    refreshBbCode() {
        const currentBbCode = this.getBbCode();

        this.setState({bbCode: currentBbCode});
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

        const arrow = deltaIndex !== 0 ? ` - ${deltaIndex > 0 ? '⇧' : '⇩'}` : '';
        // const arrow = deltaIndex > 0 ? ' - ⇧' : '';

        return (
            <Fragment key={man.id}>
                {index + 1}. {man.name} - {intWithSpaces(man.deckValue)}
                {arrow}
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

    getWrapperInnerHtml(): string {
        const {state} = this;
        const {wrapperRef} = state;
        const wrapperNode = wrapperRef.current;

        if (!wrapperNode) {
            console.error('TopDeck.getWrapperInnerHtml: Can not get wrapperRef.current');
            return '';
        }

        return wrapperNode.innerHTML;
    }

    getBbCode(): string {
        return htmlToBbCode(this.getWrapperInnerHtml());
    }

    render(): Node {
        const {state} = this;
        const {bbCode} = state;

        return (
            <>
                <hr/>
                <div className={guildStatisticsStyle.guild_statistics__wrapper} ref={state.wrapperRef}>
                    <center>
                        <FontColorHeader isBold>꧁ ТОП КОЛОД ꧂</FontColorHeader>
                        <br/>
                        <br/>
                        {this.renderManList()}
                    </center>
                </div>
                <textarea
                    className={guildStatisticsStyle.guild_statistics__textarea}
                    cols="30"
                    disabled
                    name="bb-code"
                    rows="10"
                    value={bbCode}
                />
            </>
        );
    }
}
