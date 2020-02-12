// @flow

/* global window, location */

import {periodNameMap} from './extract-const';
import {getReportData} from './api/get-report-data';
import {saveDataAsJsonFile} from './util/save-file';
import {getTime, timeToFileNameString, waitForTime} from './util/time';
import {getGuildLevel} from './api/get-guild-level';
import {getAltarLevel} from './api/get-altar-level';
import {getGuildCardData} from './api/get-guild-card-data';
import {getManList} from './api/get-guild-man-list';
import type {ReportDataType} from './extract-type';

(async () => {
    const guildLevel = 0;
    const altarLevel = 0;
    const guildCard = {
        value: 0,
        level: 0,
    };

    console.log('guildLevel:', guildLevel);
    console.log('altarLevel:', altarLevel);
    console.log('guildCard:', guildCard);

    const {search} = location;

    const [guildKeyName, guildId] = search.split('=');

    if (!guildId) {
        console.error('Define guild id, e.g. https://mailru.elem.mobi/?guild-report=111');
        return;
    }

    const manList = await getManList(periodNameMap.usual, guildId);

    console.log('manList:', manList);

    const reportData: ReportDataType = {
        timeStamp: getTime(),
        guildLevel,
        altarLevel,
        guildCard,
        manList,
    };

    await saveDataAsJsonFile('report-' + timeToFileNameString(reportData.timeStamp), reportData);

    console.log('reportDataGuild');
    console.log(reportData);
})();
