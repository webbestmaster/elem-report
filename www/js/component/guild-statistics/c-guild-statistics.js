// @flow

import React, {Component, type Node} from 'react';

import type {NullableType} from '../../lib/type';
import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';
import {timeToHumanDateString} from '../../../../extract/util/time';

import guildStatisticsStyle from './guild-statistics.scss';

import {
    getAllDeckValue,
    getAverageDeckValue,
    getLeaveMemberList,
    getManById,
    getNewMemberList,
    intWithSpaces,
} from './guild-statistics-helper';
import {FontColorHeader, FontColorNegative, FontColorPositive, FontColorText} from './c-font-color';

type PropsType = {|
    +report: {|
        +before: ReportDataType,
        +after: ReportDataType,
    |},
|};

type StateType = {};

export class GuildStatistics extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);

        this.state = {};
    }

    getReport(): {|before: ReportDataType, +after: ReportDataType|} {
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
                <FontColorText isBold>Гильдию покинули:&nbsp;</FontColorText>
                <FontColorText>
                    {leaveMemberList.map((man: GuildManDataType): string => man.name).join(', ') || '-'}
                </FontColorText>

                <br/>

                <FontColorText isBold>В гильдию приняты:&nbsp;</FontColorText>
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
        const averageDeltaNode = averageDelta > 0 ? `+${averageDelta}` : `-${averageDelta}`;
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

    renderMemberListItem = (man: GuildManDataType): Node => {
        const {before, after} = this.getReport();

        const manAfter = getManById(man.id, after);
        const manBefore = getManById(man.id, before) || manAfter;

        if (!manAfter || !manBefore) {
            console.error('renderMemberListItem: manAfter and manBefore is not define');
            return null;
        }

        return (
            <p key={man.id}>
                <a href={'/user/' + manAfter.id}>{manAfter.name}</a>
                <span> - [{manAfter.level}]</span>
                <span>
                    сила: {manAfter.deckValue} [{manAfter.deckValue - manBefore.deckValue}]
                </span>
                <span>
                    {manAfter.rank}, в гильдии {manAfter.daysInGame}
                </span>
            </p>
        );
    };

    renderMemberList(): Node {
        const {before, after} = this.getReport();

        return <div>{after.manList.map(this.renderMemberListItem)}</div>;
    }

    render(): Node {
        const {before, after} = this.getReport();

        const {guildCard: afterGuildCard} = after;

        if (!afterGuildCard) {
            return null;
        }

        return (
            <div className={guildStatisticsStyle.guild_statistics__wrapper}>
                <FontColorHeader isBold>Статистика по гильдии за период</FontColorHeader>

                <br/>

                <FontColorHeader isBold>
                    с&nbsp;{timeToHumanDateString(before.timeStamp)}&nbsp;по&nbsp;
                    {timeToHumanDateString(after.timeStamp)}:
                </FontColorHeader>

                <br/>

                <FontColorText isBold>Боевой рейтинг - {after.guildLevel}</FontColorText>

                <br/>

                <FontColorText isBold>Уровень алтаря - {after.altarLevel}</FontColorText>

                <br/>

                <FontColorText isBold>
                    Уровень карты гильдии - {afterGuildCard.level} [{afterGuildCard.value}]
                </FontColorText>

                <br/>

                {this.renderAverageDeckValue()}

                <br/>

                {this.renderManDelta()}

                <br/>

                {this.renderMemberList()}
            </div>
        );
    }
}
