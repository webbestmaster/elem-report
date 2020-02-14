// @flow

import {getManList} from '../api/get-guild-man-list';
import {periodNameMap} from '../extract-const';
import type {ReportDataType} from '../extract-type';

import {getTime} from './time';

export async function getGuildData(guildId: string): Promise<ReportDataType> {
    const guildLevel = 0;
    const altarLevel = 0;
    const guildCard = {
        value: 0,
        level: 0,
    };

    const manList = await getManList(periodNameMap.usual, guildId);

    return {
        timeStamp: getTime(),
        guildLevel,
        altarLevel,
        guildCard,
        manList,
    };
}
