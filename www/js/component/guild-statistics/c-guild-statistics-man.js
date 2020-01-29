// @flow

import React, {Component, Fragment, type Node} from 'react';

import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';

import {getManById, intWithSpaces} from './guild-statistics-helper';
import {FontColorHeader, FontColorPositive, FontColorText} from './c-font-color';
import {siteLinkPrefix} from './guild-statistics-const';

type PropsType = {|
    +before: ReportDataType,
    +after: ReportDataType,
    +man: GuildManDataType,
|};

type StateType = null;

export class GuildStatisticsMan extends Component<PropsType, StateType> {
    renderDeckValue(deckValueBefore: number, deckValueAfter: number): Node {
        const deckValueDelta = deckValueAfter - deckValueBefore;
        const deckValueString = intWithSpaces(deckValueAfter);

        if (deckValueDelta > 0) {
            return (
                <FontColorPositive>
                    {deckValueString} [+{intWithSpaces(deckValueDelta)}]
                </FontColorPositive>
            );
        }

        return <FontColorText>{deckValueString}</FontColorText>;
    }

    render(): Node {
        const {props} = this;
        const {before, after, man} = props;

        const manAfter = getManById(man.id, after);
        const manBefore = getManById(man.id, before) || manAfter;

        if (!manAfter || !manBefore) {
            console.error('renderMemberListItem: manAfter and manBefore is not define');
            return null;
        }

        const levelDelta = manAfter.level - manBefore.level;
        const LevelDeltaWrapper = levelDelta > 0 ? FontColorPositive : FontColorText;

        return (
            <>
                <img alt="" src={siteLinkPrefix + manAfter.avatarSrc} width="20"/>{' '}
                <a href={siteLinkPrefix + '/user/' + manAfter.id} rel="noopener noreferrer" target="_blank">
                    <FontColorHeader>{manAfter.name}</FontColorHeader>
                </a>{' '}
                <FontColorText>
                    [<LevelDeltaWrapper>{manAfter.level}</LevelDeltaWrapper>] -
                </FontColorText>{' '}
                <img alt="" src={siteLinkPrefix + '/img/gifts/pr-swords-01.png'} width="18"/>{' '}
                {this.renderDeckValue(manBefore.deckValue, manAfter.deckValue)}
                <br/>
                <FontColorText>
                    {manAfter.rank}, в гильдии {manAfter.daysInGame} д.
                </FontColorText>
                <br/>
                <br/>
            </>
        );
    }
}
