// @flow

/* global window, location */

import {isNotString} from '../www/js/lib/is';

import {saveDataAsJsonFile} from './util/save-file';
import {getTime, timeToFileNameString} from './util/time';
import type {GuildsListDataType, ReportDataType} from './extract-type';
import {getGuildData} from './util/get-guild-data';
import {getNodeFromUrl} from './util/get-data';

type ShortGuildDataType = {|
    +guildId: string,
    +name: string,
    +logoSrc: string,
|};

(async () => {
    const page = await getNodeFromUrl('/ratings/guild/combat/');

    const nodeList = [...page.querySelectorAll('table.ulist tr')];

    console.log(nodeList);

    // remove 'header'
    nodeList.shift();

    console.log(nodeList);

    const shortGuildDataList: Array<ShortGuildDataType> = nodeList.map((rowNode: HTMLElement): ShortGuildDataType => {
        const linkNode = rowNode.querySelector('.user a[href^="/guild/"]');
        const logoNode = rowNode.querySelector('img[src^="/img/gs/"]');

        if (!linkNode || !logoNode) {
            console.error('can not get linkNode or logoNode');
            return {
                guildId: 'N/A',
                name: 'N/A',
                logoSrc: 'N/A',
            };
        }

        const href = linkNode.getAttribute('href');

        if (isNotString(href)) {
            console.error('can not detect href of', linkNode);
            return {
                guildId: 'N/A',
                name: 'N/A',
                logoSrc: 'N/A',
            };
        }

        return {
            logoSrc: logoNode.getAttribute('src') || 'N/A',
            guildId: href.replace(/\D/g, ''),
            name: linkNode.textContent,
        };
    });

    const guildsData: GuildsListDataType = {
        timeStamp: getTime(),
        guildList: [],
    };

    // eslint-disable-next-line no-loops/no-loops
    for (const shortGuildData of shortGuildDataList) {
        guildsData.guildList.push({
            ...shortGuildData,
            report: await getGuildData(shortGuildData.guildId),
        });
    }

    console.log(guildsData);

    await saveDataAsJsonFile('report-top-10-guild-' + timeToFileNameString(guildsData.timeStamp), guildsData);

    /*
    console.log('reportDataGuild');
    console.log(reportData);
    */
})();
