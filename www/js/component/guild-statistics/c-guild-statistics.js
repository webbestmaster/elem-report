// @flow

import React, {Component, type Node} from 'react';

import type {NullableType} from '../../lib/type';
import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';
import {timeToHumanDateString} from '../../../../extract/util/time';

import {
    getAllDeckValue,
    getAverageDeckValue,
    getLeaveMemberList,
    getNewMemberList,
    intWithSpaces,
} from './guild-statistics-helper';

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
                <p>
                    Гильдию покинули:{' '}
                    {leaveMemberList.map((man: GuildManDataType): string => man.name).join(', ') || '-'}
                </p>
                <p>
                    В гильдию приняты:{' '}
                    {newMemberList.map((man: GuildManDataType): string => man.name).join(', ') || '-'}
                </p>
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
        const averageDeltaNode = averageDelta >= 0 ? <span>+{averageDelta}</span> : <span>-{averageDelta}</span>;

        return (
            <>
                <p>
                    Средняя колода - {intWithSpaces(deckAverageValueAfter)} [{averageDeltaNode}]
                </p>
                <p>Общий прирост колод - {intWithSpaces(allDelta)}</p>
            </>
        );
    }

    render(): Node {
        const {before, after} = this.getReport();

        const {guildCard: afterGuildCard} = after;

        if (!afterGuildCard) {
            return null;
        }

        return (
            <>
                <p>
                    Статистика по гильдии за период с&nbsp;
                    {timeToHumanDateString(before.timeStamp)}&nbsp;по&nbsp;{timeToHumanDateString(after.timeStamp)}:
                </p>
                <p>Боевой рейтинг - {after.guildLevel}</p>
                <p>Уровень алтаря - {after.altarLevel}</p>
                <p>
                    Уровень карты гильдии - {afterGuildCard.level} [{afterGuildCard.value}]
                </p>
                {this.renderAverageDeckValue()}
                {this.renderManDelta()}
            </>
        );
    }
}
