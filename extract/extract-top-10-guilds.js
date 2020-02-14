// @flow

/* global window, location */

import {isNotString} from '../www/js/lib/is';

import {saveDataAsJsonFile} from './util/save-file';
import {getTime, timeToFileNameString} from './util/time';
import type {GuildsDataType, ReportDataType} from './extract-type';
import {getGuildData} from './util/get-guild-data';
import {getNodeFromUrl} from './util/get-data';

(async () => {
    const page = await getNodeFromUrl('/ratings/guild/combat/');
    const shortGuildDataList: Array<{+guildId: string, +name: string}> = [
        ...page.querySelectorAll('.user a[href^="/guild/"]'),
    ].map((linkNode: HTMLElement): {+guildId: string, +name: string} => {
        const href = linkNode.getAttribute('href');

        if (isNotString(href)) {
            console.error('can not detect href of', linkNode);
            return {
                guildId: 'N/A',
                name: 'N/A',
            };
        }

        return {
            guildId: href.replace(/\D/g, ''),
            name: linkNode.textContent,
        };
    });

    const guildsData: GuildsDataType = {
        timeStamp: getTime(),
        guildList: [],
    };

    // eslint-disable-next-line no-loops/no-loops
    for (const shortGuildData of shortGuildDataList) {
        if (shortGuildDataList.indexOf(shortGuildData) < 3) {
            guildsData.guildList.push({
                guildId: shortGuildData.guildId,
                name: shortGuildData.name,
                report: await getGuildData(shortGuildData.guildId),
            });
        }
    }

    console.log(guildsData);

    await saveDataAsJsonFile('report-top-10-guild-' + timeToFileNameString(guildsData.timeStamp), guildsData);

    /*
    console.log('reportDataGuild');
    console.log(reportData);
    */
})();
