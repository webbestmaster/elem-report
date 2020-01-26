// @flow

import {getGuildLevel} from './api/get-guild-level';
import type {ReportDataType} from './extract-type';
import {getTime} from './util/date';
import {getAltarLevel} from './api/get-altar-level';
import {getGuildCardData} from './api/get-guild-card-data';

async function getReportData(): Promise<ReportDataType> {
    const guildLevel = await getGuildLevel();
    const altarLevel = await getAltarLevel();
    const guildCard = await getGuildCardData();

    return {
        timeStamp: getTime(),
        guildLevel,
        altarLevel,
        guildCard,
    };
}

(async () => {
    const reportData = await getReportData();

    console.log('reportData');
    console.log(reportData);
})();
