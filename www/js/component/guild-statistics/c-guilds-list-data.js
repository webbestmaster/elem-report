// @flow

import React, {Component, type Node} from 'react';

import type {GuildDataType, GuildManDataType, GuildsListDataType} from '../../../../extract/extract-type';
import {timeToHumanDateString} from '../../../../extract/util/time';

import {FontColorHeader, FontColorNegative, FontColorPositive, FontColorText} from './c-font-color';
import {
    getAllDeckValue,
    getAverageDeckValue,
    getLeaveMemberList,
    getNewMemberList,
    htmlToBbCode,
    intWithSpaces,
} from './guild-statistics-helper';

import guildStatisticsStyle from './guild-statistics.scss';
import {defaultFullFightCount} from './guild-statistics-const';
import {GuildStatisticsMan} from './c-guild-statistics-man';
import {GuildDataStatistics} from './c-guild-data-statistics';

type PropsType = {|
    +report: {|
        +before: GuildsListDataType,
        +after: GuildsListDataType,
    |},
|};

type StateType = {|
    +wrapperRef: {current: HTMLElement | null},
    +bbCode: string,
|};

export class GuildsListData extends Component<PropsType, StateType> {
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

    getReport(): {|+before: GuildsListDataType, +after: GuildsListDataType|} {
        const {props} = this;
        const {report} = props;
        const {before, after} = report;

        return {before, after};
    }

    getWrapperInnerHtml(): string {
        const {state} = this;
        const {wrapperRef} = state;
        const wrapperNode = wrapperRef.current;

        if (!wrapperNode) {
            console.error('GuildStatistics.getWrapperInnerHtml: Can not get wrapperRef.current');
            return '';
        }

        return wrapperNode.innerHTML;
    }

    getBbCode(): string {
        return htmlToBbCode(this.getWrapperInnerHtml());
    }

    renderGuildListItem = (guildData: GuildDataType): Node => {
        const {before, after} = this.getReport();

        return <GuildDataStatistics after={after} before={before} guildData={guildData} key={guildData.guildId}/>;
    };

    renderGuildList(): Array<Node> {
        const {after} = this.getReport();

        return after.guildList.map(this.renderGuildListItem);
    }

    render(): Node {
        const {state} = this;
        const {bbCode} = state;
        const {before, after} = this.getReport();

        return (
            <>
                <div className={guildStatisticsStyle.guild_statistics__wrapper} ref={state.wrapperRef}>
                    <FontColorHeader isBold>Статистика по гильдиям за период</FontColorHeader>

                    <br/>

                    <FontColorHeader isBold>
                        с {timeToHumanDateString(before.timeStamp)} по {timeToHumanDateString(after.timeStamp)}:
                    </FontColorHeader>

                    <br/>
                    <br/>

                    {this.renderGuildList()}
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
