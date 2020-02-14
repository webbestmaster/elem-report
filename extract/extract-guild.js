// @flow

/* global window, location */

import {saveDataAsJsonFile} from './util/save-file';
import {timeToFileNameString} from './util/time';
import type {ReportDataType} from './extract-type';
import {getGuildData} from './util/get-guild-data';

(async () => {
    const {search} = location;
    const [guildId] = search.split('=')[1];

    if (!guildId) {
        console.error('Define guild id, e.g. https://mailru.elem.mobi/?guild-report=111');
        return;
    }

    const reportData: ReportDataType = await getGuildData(guildId);

    await saveDataAsJsonFile('report-' + timeToFileNameString(reportData.timeStamp), reportData);

    console.log('reportDataGuild');
    console.log(reportData);
})();
