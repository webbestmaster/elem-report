// @flow

import {getGuildLevel} from './api/get-guild-level';
import type {ReportDataType} from './extract-type';
import {getTime} from './util/time';
import {getAltarLevel} from './api/get-altar-level';
import {getGuildCardData} from './api/get-guild-card-data';
import {getManList} from './api/get-guild-man-list';
// import {} from './api/get-guild-man-list';

async function getReportData(): Promise<ReportDataType> {
    const guildLevel = await getGuildLevel();

    console.log('guildLevel:', guildLevel);

    const altarLevel = await getAltarLevel();

    console.log('altarLevel:', altarLevel);

    const guildCard = await getGuildCardData();

    console.log('guildCard:', guildCard);

    const manList = await getManList();

    console.log('manList:', manList);

    return {
        timeStamp: getTime(),
        guildLevel,
        altarLevel,
        guildCard,
        manList,
    };
}

(async () => {
    const reportData = await getReportData();

    console.log('reportData');
    console.log(reportData);
})();
