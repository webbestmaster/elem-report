// @flow

import {getNodeFromUrl} from '../util/get-data';
import type {GuildManDataType, GuildManWarDataType, NullableType, PeriodNameType} from '../extract-type';
import {waitForTime} from '../util/time';
import {periodNameMap} from '../extract-const';

// eslint-disable-next-line complexity, max-statements
async function getManDataById(id: number): Promise<NullableType<GuildManDataType>> {
    // $FlowFixMe
    const newDocument = await getNodeFromUrl(`/user/${id}/`);
    const profileSelectorDefault = '#gameBody';
    const profileSelector = 'div[class^=profile]';

    const wrapperSelector = newDocument.querySelector(profileSelector) ? profileSelector : profileSelectorDefault;

    const nameNode = newDocument.querySelector(`${wrapperSelector} > .c_da`);
    const levelNode = newDocument.querySelector(`${wrapperSelector} > .c_99`);
    const rankNode = newDocument.querySelector(`${wrapperSelector} > .pt2.small > .fl`);
    const deckValueNode
        = newDocument.querySelector(`${wrapperSelector} > .c_orange.mt10.cntr.small`)
        // your profile open with different design
        || newDocument.querySelector('.ml5.mr3.pt2 > .c_da');
    const daysInGameNode = newDocument.querySelector(`${wrapperSelector} > .small.c_99.mt10.ml8.lh16 > .c_da`);
    const avatarNode = newDocument.querySelector('.brd.fl.mr8.ml5.mb5 img');

    if (!avatarNode || !nameNode || !levelNode || !rankNode || !deckValueNode || !daysInGameNode) {
        console.error(
            'getManDataById: can not get nodes, id:',
            id,
            avatarNode,
            nameNode,
            levelNode,
            rankNode,
            deckValueNode,
            daysInGameNode
        );

        return null;
    }

    const name = nameNode.textContent.trim();
    const avatarSrc = avatarNode.getAttribute('src') || '';
    const level = parseInt(levelNode.textContent.replace(/\D/g, ''), 10);
    const rank = rankNode.textContent.trim();
    const deckValue = parseInt(deckValueNode.textContent.replace(/\D/g, ''), 10);
    const daysInGame = parseInt(daysInGameNode.textContent.replace(/\D/g, ''), 10);

    const manData = {id, name, level, rank, deckValue, daysInGame, avatarSrc, warData: null};

    if (!name || !level || !rank || !deckValue || !daysInGame || !avatarSrc) {
        console.error('getManDataById: can not got data, id:', id);
        console.log(manData);

        return null;
    }

    return manData;
}

async function getManWarDataById(id: number): Promise<NullableType<GuildManWarDataType>> {
    const newDocument = await getNodeFromUrl(`/gwprofile/${id}/`);
    const deckValueNode = newDocument.querySelector('.c_orange.mt10.cntr.small');

    if (!deckValueNode) {
        console.error('getManWarDataById: can not get ');
        return null;
    }

    const deckValue = parseInt(deckValueNode.textContent.replace(/\D/g, ''), 10);

    if (!deckValue) {
        console.error('getManDataById: can not got deckValue, id:', id);
        console.log(deckValue);

        return null;
    }

    return {deckValue};
}

async function getManIdList(): Promise<Array<number>> {
    const nodeList: Array<HTMLElement> = await Promise.all(
        // [1, 2, 3, 4, 5].map((index: number): Promise<HTMLElement> => getNodeFromUrl('/guild/members/page_' + index))
        [1].map((index: number): Promise<HTMLElement> => getNodeFromUrl('/guild/members/page_' + index))
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

export async function getManList(periodName: PeriodNameType): Promise<Array<GuildManDataType>> {
    const idList = await getManIdList();
    const idListLength = idList.length;

    console.log('idList', idList);

    const manList: Array<GuildManDataType> = [];

    // eslint-disable-next-line no-loops/no-loops
    for (const id of idList) {
        await waitForTime(1.5e3);
        const manData = await getManDataById(id);

        await waitForTime(1.5e3);
        const warData = periodName === periodNameMap.war ? await getManWarDataById(id) : null;

        if (manData) {
            manList.push({...manData, warData});
        } else {
            console.error('getManList: can not get man with id:', id);
        }

        console.log('getManList progress:', Math.floor(manList.length / idListLength * 100) + '%');
    }

    return manList;
}
