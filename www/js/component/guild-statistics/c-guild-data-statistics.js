// @flow

import React, {Component, Fragment, type Node} from 'react';

import type {GuildDataType, GuildManDataType, GuildsListDataType} from '../../../../extract/extract-type';

import {intWithSpaces, getGuildById, getAverageDeckValue} from './guild-statistics-helper';
import {FontColorHeader, FontColorNegative, FontColorPositive, FontColorText} from './c-font-color';
import {siteLinkPrefix} from './guild-statistics-const';

type PropsType = {|
    +before: GuildsListDataType,
    +after: GuildsListDataType,
    +guildData: GuildDataType,
|};

type StateType = null;

export class GuildDataStatistics extends Component<PropsType, StateType> {
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

        if (deckValueDelta < 0) {
            return (
                <FontColorNegative>
                    {deckValueString} [-{intWithSpaces(Math.abs(deckValueDelta))}]
                </FontColorNegative>
            );
        }

        return <FontColorText>{deckValueString}</FontColorText>;
    }

    renderName(): Node {
        const {props} = this;
        const {guildData} = props;

        return (
            <a href={siteLinkPrefix + '/guild/' + guildData.guildId} rel="noopener noreferrer" target="_blank">
                <FontColorHeader>{guildData.name}</FontColorHeader>
            </a>
        );
    }

    render(): Node {
        const {props} = this;
        const {before, after, guildData} = props;

        const guildAfter = getGuildById(guildData.guildId, after);
        const guildBefore = getGuildById(guildData.guildId, before) || guildAfter;

        if (!guildAfter || !guildBefore) {
            console.error('GuildDataStatistics: guildAfter and guildAfter is not define');
            return null;
        }

        return (
            <>
                {/* <img alt="" src={siteLinkPrefix + guildData.logoSrc} width="14"/>*/}
                {this.renderName()}
                <FontColorText> &mdash; </FontColorText>
                {this.renderDeckValue(getAverageDeckValue(guildBefore.report), getAverageDeckValue(guildAfter.report))}
                <br/>
            </>
        );
    }
}
