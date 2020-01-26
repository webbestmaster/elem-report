// @flow

import {getGuildLevel} from './api/get-guild-level';
import type {ReportDataType} from './extract-type';
import {getTime} from './util/date';
import {getAltarLevel} from './api/get-altar-level';

async function getReportData(): Promise<ReportDataType> {
    const guildLevel = await getGuildLevel();
    const altarLevel = await getAltarLevel();

    return {
        time: getTime(),
        guildLevel,
        altarLevel,
    };
}

(async () => {
    const reportData = await getReportData();

    console.log('reportData');
    console.log(reportData);
})();
