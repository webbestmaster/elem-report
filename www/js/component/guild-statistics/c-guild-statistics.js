// @flow

/* global navigator */

import React, {Component, Fragment, type Node} from 'react';

import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';
import {timeToHumanDateString} from '../../../../extract/util/time';

import {FontColorHeader, FontColorNegative, FontColorPositive, FontColorText} from './c-font-color';
import {
    getAllDeckValue,
    getAverageDeckValue,
    getLeaveMemberList,
    getManById,
    getNewMemberList,
    intWithSpaces,
} from './guild-statistics-helper';
import guildStatisticsStyle from './guild-statistics.scss';
import {siteHost, siteLinkPrefix} from './guild-statistics-const';

type PropsType = {|
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

    // eslint-disable-next-line complexity
    renderMemberListItem = (man: GuildManDataType): Node => {
        const {before, after} = this.getReport();

        const manAfter = getManById(man.id, after);
        const manBefore = getManById(man.id, before) || manAfter;

        if (!manAfter || !manBefore) {
            console.error('renderMemberListItem: manAfter and manBefore is not define');
            return null;
        }

        const levelDelta = manAfter.level - manBefore.level;
        const deckValueDelta = manAfter.deckValue - manBefore.deckValue;

        const LevelDeltaWrapper = levelDelta > 0 ? FontColorPositive : FontColorText;
        const deckValueString = intWithSpaces(manAfter.deckValue);
        const deckValueNode
            = deckValueDelta > 0
                ? <FontColorPositive>{`${deckValueString} [+${deckValueDelta}]`}</FontColorPositive>
                : <FontColorText>{deckValueString}</FontColorText>

            ;

        return (
            <Fragment key={man.id}>
                <img alt="" height="20" src={siteLinkPrefix + manAfter.avatarSrc} width="auto"/>
                <a href={siteLinkPrefix + '/user/' + manAfter.id} rel="noopener noreferrer" target="_blank">
                    <FontColorHeader>{manAfter.name}</FontColorHeader>
                </a>
                &nbsp;
                <FontColorText>
                    [<LevelDeltaWrapper>{manAfter.level}</LevelDeltaWrapper>] -
                </FontColorText>
                &nbsp;
                <img alt="" height="18" src={siteLinkPrefix + '/img/gifts/pr-swords-01.png'}/>
                {deckValueNode}
                <br/>
                <FontColorText>
                    {manAfter.rank}, в гильдии {manAfter.daysInGame} д.
                </FontColorText>
                <br/>
            </Fragment>
        );
    };

    renderMemberList(): Array<Node> {
        const {after} = this.getReport();

        return after.manList.map(this.renderMemberListItem);
    }

    handleGetHtml = async () => {
        const {state} = this;
        const {wrapperRef} = state;
        const wrapperNode = wrapperRef.current;

        if (!wrapperNode) {
            console.error('handleGetHtml: Can not get wrapperRef.current');
            return;
        }

        const htmlCode = wrapperNode.innerHTML;

        navigator.clipboard.writeText(htmlCode);
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
                <button onClick={this.handleGetHtml} type="button">
                    [ Het HTML code ]
                </button>
                <hr/>
                <div className={guildStatisticsStyle.guild_statistics__wrapper} ref={state.wrapperRef}>
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
                    <br/>

                    {this.renderMemberList()}
                </div>
            </>
        );
    }
}
