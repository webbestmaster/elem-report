// @flow

import {getNodeFromUrl} from '../util/get-data';
import type {GuildManDataType} from '../extract-type';
import {waitForTime} from '../util/time';

// eslint-disable-next-line complexity, max-statements
async function getManDataById(id: number): Promise<GuildManDataType> {
    const defaultData: GuildManDataType = {
        id,
        name: 'N/A',
        level: -1,
        rank: 'N/A',
        deckValue: -1,
        daysInGame: -1,
    };

    const newDocument = await getNodeFromUrl(`/user/${id}/`);
    const profileSelectorDefault = '#gameBody';
    const profileSelector = 'div[class^=profile]';

    const wrapperSelector = newDocument.querySelector(profileSelector) ? profileSelector : profileSelectorDefault;

    const nameNode = newDocument.querySelector(`${wrapperSelector} > .c_da`);
    const levelNode = newDocument.querySelector(`${wrapperSelector} > .c_99`);
    const rankNode = newDocument.querySelector(`${wrapperSelector} > .pt2.small > .fl`);
    const deckNode
        = newDocument.querySelector(`${wrapperSelector} > .c_orange.mt10.cntr.small`)
        // your profile open with different design
        || newDocument.querySelector('.ml5.mr3.pt2 > .c_da');
    const daysInGameNode = newDocument.querySelector(`${wrapperSelector} > .small.c_99.mt10.ml8.lh16 > .c_da`);

    if (!nameNode || !levelNode || !rankNode || !deckNode || !daysInGameNode) {
        console.error('getManDataById: can not get nodes', nameNode, levelNode, rankNode, deckNode, daysInGameNode);
        return defaultData;
    }

    const name = nameNode.textContent.trim();
    const level = parseInt(levelNode.textContent.replace(/\D/g, ''), 10);
    const rank = rankNode.textContent.trim();
    const deckValue = parseInt(deckNode.textContent.replace(/\D/g, ''), 10);
    const daysInGame = parseInt(daysInGameNode.textContent.replace(/\D/g, ''), 10);

    const manData = {id, name, level, rank, deckValue, daysInGame};

    if (!name || !level || !rank || !deckValue || !daysInGame) {
        console.error('getManDataById: can not got data');
        console.log(manData);
        return defaultData;
    }

    return manData;
}

async function getManIdList(): Promise<Array<number>> {
    const nodeList: Array<HTMLElement> = await Promise.all(
        [1, 2, 3, 4, 5].map((index: number): Promise<HTMLElement> => getNodeFromUrl('/guild/members/page_' + index))
    );

    const idList: Array<number> = [];

    nodeList.forEach((html: HTMLElement) => {
        const linkList = html.querySelectorAll('.bl.tdn.small.c_dblue.ptb5');

        linkList.forEach((link: HTMLElement) => {
            const href = link.getAttribute('href') || '';
            const id = parseInt(href.replace(/\D/g, ''), 10);

            idList.push(id);
        });
    });

    return idList;
}

export async function getManList(): Promise<Array<GuildManDataType>> {
    const idList = await getManIdList();
    const idListLength = idList.length;

    console.log('idList', idList);

    const manList: Array<GuildManDataType> = [];

    // eslint-disable-next-line no-loops/no-loops
    for (const id of idList) {
        const manData = await getManDataById(id);

        manList.push(manData);
        await waitForTime(1e3);
        console.log('getManList progress:', Math.floor(manList.length / idListLength * 100) + '%');
    }

    return manList;
}
