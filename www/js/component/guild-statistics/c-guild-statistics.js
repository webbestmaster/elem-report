// @flow

import React, {Component, type Node} from 'react';

import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';
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

type PropsType = {|
    +report: {|
        +before: ReportDataType,
        +after: ReportDataType,
    |},
|};

type StateType = {|
    +wrapperRef: {current: HTMLElement | null},
    +fullFightCount: number,
    +bbCode: string,
|};

export class GuildStatistics extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {
            wrapperRef: React.createRef<HTMLElement>(),
            fullFightCount: defaultFullFightCount,
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

    getReport(): {|+before: ReportDataType, +after: ReportDataType|} {
        const {props} = this;
        const {report} = props;
        const {before, after} = report;

        return {before, after};
    }

    renderManDelta(): Node {
        const {before, after} = this.getReport();

        const newMemberList = getNewMemberList(before, after);
        const leaveMemberList = getLeaveMemberList(before, after);

        return (
            <>
                <FontColorText isBold>Гильдию покинули:</FontColorText>{' '}
                <FontColorText>
                    {leaveMemberList.map((man: GuildManDataType): string => man.name).join(', ') || '-'}
                </FontColorText>
                <br/>
                <FontColorText isBold>В гильдию приняты:</FontColorText>{' '}
                <FontColorText>
                    {newMemberList.map((man: GuildManDataType): string => man.name).join(', ') || '-'}
                </FontColorText>
            </>
        );
    }

    renderAverageDeckValue(): Node {
        const {before, after} = this.getReport();

        const allDeckValueBefore = getAllDeckValue(before);
        const allDeckValueAfter = getAllDeckValue(after);
        const deckAverageValueBefore = getAverageDeckValue(before);
        const deckAverageValueAfter = getAverageDeckValue(after);

        const allDelta = allDeckValueAfter - allDeckValueBefore;
        const averageDelta = deckAverageValueAfter - deckAverageValueBefore;
        const averageDeltaNode
            = averageDelta > 0 ? `+${intWithSpaces(averageDelta)}` : `-${intWithSpaces(Math.abs(averageDelta))}`;
        const ValueWrapper = averageDelta > 0 ? FontColorPositive : FontColorNegative;

        return (
            <>
                <FontColorText isBold>Средняя колода - </FontColorText>
                <ValueWrapper>
                    {intWithSpaces(deckAverageValueAfter)} [{averageDeltaNode}]
                </ValueWrapper>

                <br/>

                <FontColorText isBold>Общий прирост колод - </FontColorText>
                <ValueWrapper>{intWithSpaces(allDelta)}</ValueWrapper>
            </>
        );
    }

    // eslint-disable-next-line complexity
    renderMemberListItem = (man: GuildManDataType): Node => {
        const {state} = this;
        const {fullFightCount} = state;
        const {before, after} = this.getReport();

        return (
            <GuildStatisticsMan after={after} before={before} fullFightCount={fullFightCount} key={man.id} man={man}/>
        );
    };

    renderMemberList(): Array<Node> {
        const {after} = this.getReport();

        return after.manList.map(this.renderMemberListItem);
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

    handleChangeFullFightCount = (evt: SyntheticEvent<HTMLInputElement>) => {
        const inputValue = parseInt(evt.currentTarget.value, 10) || defaultFullFightCount;

        this.setState({fullFightCount: inputValue});
    };

    render(): Node {
        const {state} = this;
        const {bbCode} = state;
        const {before, after} = this.getReport();

        const {guildCard: afterGuildCard} = after;

        if (!afterGuildCard) {
            return null;
        }

        return (
            <>
                <span>&nbsp;Кол-во боёв:&nbsp;</span>
                <input
                    className={guildStatisticsStyle.guild_statistics__input}
                    defaultValue={6}
                    onChange={this.handleChangeFullFightCount}
                    type="number"
                />
                <hr/>
                <div className={guildStatisticsStyle.guild_statistics__wrapper} ref={state.wrapperRef}>
                    <FontColorHeader isBold>Статистика по гильдии за период</FontColorHeader>

                    <br/>

                    <FontColorHeader isBold>
                        с {timeToHumanDateString(before.timeStamp)} по {timeToHumanDateString(after.timeStamp)}:
                    </FontColorHeader>

                    <br/>

                    <FontColorText isBold>Боевой рейтинг - {after.guildLevel}</FontColorText>

                    <br/>

                    <FontColorText isBold>Уровень алтаря - {after.altarLevel}</FontColorText>

                    <br/>

                    <FontColorText isBold>
                        Уровень карты гильдии - {afterGuildCard.level} [{intWithSpaces(afterGuildCard.value)}]
                    </FontColorText>

                    <br/>

                    {this.renderAverageDeckValue()}

                    <br/>

                    {this.renderManDelta()}

                    <br/>
                    <br/>

                    {this.renderMemberList()}
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
