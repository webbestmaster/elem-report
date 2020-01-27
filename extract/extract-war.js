// @flow

import {periodNameMap} from './extract-const';
import {getReportData} from './util/get-report-data';
import {saveDataAsJsonFile} from './util/save-file';

(async () => {
    const reportData = await getReportData(periodNameMap.war);

    await saveDataAsJsonFile('report-usual', reportData);

    console.log('reportData');
    console.log(reportData);
})();
