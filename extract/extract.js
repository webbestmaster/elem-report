// @flow

import {periodNameMap} from './extract-const';
import {getReportData} from './api/get-report-data';
import {saveDataAsJsonFile} from './util/save-file';
import {timeToFileNameString} from './util/time';

(async () => {
    const reportData = await getReportData(periodNameMap.usual);

    await saveDataAsJsonFile('report-' + timeToFileNameString(reportData.timeStamp), reportData);

    console.log('reportData');
    console.log(reportData);
})();
