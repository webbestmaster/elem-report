// @flow

import type {PeriodNameType, ReportDataType} from '../extract-type';

import {getGuildLevel} from '../api/get-guild-level';
import {getAltarLevel} from '../api/get-altar-level';
import {getGuildCardData} from '../api/get-guild-card-data';
import {getManList} from '../api/get-guild-man-list';

import {getTime} from './time';

export async function getReportData(periodName: PeriodNameType): Promise<ReportDataType> {
    const guildLevel = await getGuildLevel();

    console.log('guildLevel:', guildLevel);

    const altarLevel = await getAltarLevel();

    console.log('altarLevel:', altarLevel);

    const guildCard = await getGuildCardData();

    console.log('guildCard:', guildCard);

    const manList = await getManList(periodName);

    console.log('manList:', manList);

    return {
        timeStamp: getTime(),
        guildLevel,
        altarLevel,
        guildCard,
        manList,
    };
}
