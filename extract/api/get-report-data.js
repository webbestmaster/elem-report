// @flow

import type {PeriodNameType, ReportDataType} from '../extract-type';
import {getTime, waitForTime} from '../util/time';

import {getGuildLevel} from './get-guild-level';
import {getAltarLevel} from './get-altar-level';
import {getGuildCardData} from './get-guild-card-data';
import {getManList} from './get-guild-man-list';

export async function getReportData(periodName: PeriodNameType): Promise<ReportDataType> {
    await waitForTime(1e3);

    const guildLevel = await getGuildLevel();

    console.log('guildLevel:', guildLevel);

    await waitForTime(1e3);

    const altarLevel = await getAltarLevel();

    console.log('altarLevel:', altarLevel);

    await waitForTime(1e3);

    const guildCard = await getGuildCardData();

    console.log('guildCard:', guildCard);

    await waitForTime(1e3);

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
