// @flow

import {getGuildLevel} from './api/get-guild-level';
import type {ReportDataType} from './extract-type';
import {getTime} from './util/date';

async function getReportData(): Promise<ReportDataType> {
    const guildLevel = await getGuildLevel();

    return {
        guildLevel,
        time: getTime(),
    };
}

(async () => {
    const reportData = await getReportData();

    console.log('reportData');
    console.log(reportData);
})();
