// @flow

/* global navigator */

import React, {Component, Fragment, type Node} from 'react';

import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';
import {timeToHumanDateString} from '../../../../extract/util/time';
import type {SnackbarContextType} from '../../provider/snackbar/snackbar-context-type';

import {FontColorHeader, FontColorNegative, FontColorPositive, FontColorText} from './c-font-color';
import {
    getAllDeckValue,
    getAverageDeckValue,
    getLeaveMemberList,
    getManById,
    getNewMemberList,
    htmlToBbCode,
    intWithSpaces,
} from './guild-statistics-helper';
import guildStatisticsStyle from './guild-statistics.scss';
import {siteHost, siteLinkPrefix} from './guild-statistics-const';
import {GuildStatisticsMan} from './c-guild-statistics-man';

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

export class GuildStatistics extends Component<PropsType, StateType> {
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
        const {before, after} = this.getReport();

        return <GuildStatisticsMan after={after} before={before} key={man.id} man={man}/>;
    };

    renderMemberList(): Array<Node> {
        const {after} = this.getReport();

        return after.manList.map(this.renderMemberListItem);
    }

    handleGetBbCode = async () => {
        const {state, props} = this;
        const {snackbarContext} = props;
        const {wrapperRef} = state;
        const wrapperNode = wrapperRef.current;

        if (!wrapperNode) {
            console.error('GuildStatistics.handleGetHtml: Can not get wrapperRef.current');
            return;
        }

        const htmlCode = wrapperNode.innerHTML;
        const bbCode = htmlToBbCode(htmlCode);

        console.log('GuildStatistics: BB code:');
        console.log(bbCode);

        navigator.clipboard
            .writeText(bbCode)
            .then((): mixed => {
                return snackbarContext.showSnackbar(
                    {children: 'BB code has been copied!', variant: 'success'},
                    'success-id'
                );
            })
            .catch((): mixed => {
                return snackbarContext.showSnackbar({children: 'Error!', variant: 'error'}, 'error-id');
            });
    };

    render(): Node {
        const {state} = this;
        const {before, after} = this.getReport();

        const {guildCard: afterGuildCard} = after;

        if (!afterGuildCard) {
            return null;
        }

        return (
            <>
                <button onClick={this.handleGetBbCode} type="button">
                    [ Get BB code ]
                </button>
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
            </>
        );
    }
}
