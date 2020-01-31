// @flow

import {getNodeFromUrl} from '../util/get-data';
import type {
    GuildManDataType,
    GuildManWarDataType,
    NullableType,
    PeriodNameType,
    GuildManShortDataType,
} from '../extract-type';
import {waitForTime} from '../util/time';
import {periodNameMap} from '../extract-const';
import {isNotNumber} from '../../www/js/lib/is';

// eslint-disable-next-line complexity, max-statements
async function getManDataById(id: number): Promise<NullableType<GuildManDataType>> {
    // $FlowFixMe
    const newDocument = await getNodeFromUrl(`/user/${id}/`);
    const profileSelectorDefault = '#gameBody';
    const profileSelector = 'div[class^=profile]';
    const daysInGuild = 0;

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

    const manData = {id, name, level, rank, deckValue, daysInGame, avatarSrc, warData: null, daysInGuild};

    if (!name || !level || !rank || !deckValue || !daysInGame || !avatarSrc) {
        console.error('getManDataById: can not got data, id:', id);
        console.log(manData);

        return null;
    }

    return manData;
}

function getKeysNFightNode(wrapperNode: HTMLElement): HTMLElement | null {
    const allNodeList = [...wrapperNode.querySelectorAll('.small.c_99.mt10')];

    const parentNode = allNodeList.find((childNode: HTMLElement): boolean => {
        return childNode.textContent.indexOf('Использовано ключей') > 0;
    });

    if (!parentNode) {
        return null;
    }

    return parentNode.querySelector('.c_orange');
}

// бои первая цифра, ключи - вторая

// eslint-disable-next-line complexity
async function getManWarDataById(id: number): Promise<NullableType<GuildManWarDataType>> {
    const newDocument = await getNodeFromUrl(`/gwprofile/${id}/`);
    const deckValueNode = newDocument.querySelector('.c_orange.mt10.cntr.small');
    const damageValueIconNode = newDocument.querySelector('img[src="/img/ico16-battle-sum.png"]');
    const damageValueNode = damageValueIconNode ? damageValueIconNode.parentElement : null;
    const keysNFightNode = getKeysNFightNode(newDocument);

    if (!deckValueNode || !damageValueNode || !keysNFightNode) {
        console.error('getManWarDataById: can not get nodes, id:', id, deckValueNode, damageValueNode, keysNFightNode);

        return null;
    }

    const deckValue = parseInt(deckValueNode.textContent.replace(/\D/g, ''), 10);
    const damageValue = parseInt(damageValueNode.textContent.replace(/\D/g, ''), 10);
    const [fightCount, keyCount] = keysNFightNode.textContent
        .trim()
        .split(/\D+/gi)
        .map((count: string): number => parseInt(count.trim(), 10));

    const hasGoblinCard = newDocument.innerHTML.indexOf('<span class="stat">6000</span>') > 0;

    const manWarData = {deckValue, damageValue, fightCount, keyCount, hasGoblinCard};

    if (isNotNumber(deckValue) || isNotNumber(damageValue) || isNotNumber(fightCount) || isNotNumber(keyCount)) {
        console.error('getManWarDataById: can not got data, id:', id);
        console.log(manWarData);

        return null;
    }

    return manWarData;
}

async function getManShortDataList(): Promise<Array<GuildManShortDataType>> {
    const pageNumberList = [1, 2, 3, 4, 5];
    // const pageNumberList = [1];

    const nodeList: Array<HTMLElement> = [];

    for (const index of pageNumberList) {
        await waitForTime(1e3);
        nodeList.push(await getNodeFromUrl('/guild/members/page_' + index));
    }

    const idList: Array<GuildManShortDataType> = [];

    nodeList.forEach((html: HTMLElement) => {
        const linkList = html.querySelectorAll('.bl.tdn.small.c_dblue.ptb5');

        linkList.forEach((link: HTMLElement) => {
            const href = link.getAttribute('href') || '';
            const id = parseInt(href.replace(/\D/g, ''), 10);
            const daysInGuildNode = link.querySelector('.fr.c_cc .c_99');

            if (!daysInGuildNode) {
                console.error('getManShortDataList: can not get daysInGuildNode');
                return;
            }

            const daysInGuildText = daysInGuildNode.textContent.replace(/\D/gi, '');

            const daysInGuild = parseInt(daysInGuildText, 10);

            if (isNotNumber(daysInGuild)) {
                console.error('getManShortDataList: daysInGuild should be a number');
            }

            idList.push({
                id,
                daysInGuild: daysInGuild || 0,
            });
        });
    });

    return idList;
}

export async function getManList(periodName: PeriodNameType): Promise<Array<GuildManDataType>> {
    const manShortDataList = await getManShortDataList();
    const manShortDataListLength = manShortDataList.length;

    console.log('manShortDataList', manShortDataList);

    const manList: Array<GuildManDataType> = [];

    // eslint-disable-next-line no-loops/no-loops
    for (const manShortData of manShortDataList) {
        const {id, daysInGuild} = manShortData;

        await waitForTime(1.5e3);
        const manData = await getManDataById(id);

        await waitForTime(1.5e3);
        const warData = periodName === periodNameMap.war ? await getManWarDataById(id) : null;

        if (manData) {
            manList.push({...manData, warData, daysInGuild});
        } else {
            console.error('getManList: can not get man with manShortData:', manShortData);
        }

        console.log('getManList progress:', (manList.length / manShortDataListLength * 100).toFixed(2) + '%');
    }

    return manList;
}
