// @flow

// Светло-бежевым цветом жирным шрифтом слова "Уровень карты гильдии", пробел, светло-бежевое тире, пробел. Далее светло-бежевым цветом цифры " 170 [18384]"

import {getNodeFromUrl} from '../util/get-data';
import type {GuildCardDataType} from '../extract-type';

export async function getGuildCardData(): Promise<GuildCardDataType> {
    const newDocument = await getNodeFromUrl('/guild/card/');
    const [valueNode, levelNode] = newDocument.querySelectorAll('.cimp.mt10.c_cc .wr1 .wr2 .pt5.small');

    if (!valueNode || !levelNode) {
        console.error('getGuildCardData: can not get valueNode or levelNode');

        return {
            value: -1,
            level: -1,
        };
    }

    const valueString = valueNode.textContent.replace(/\D/g, '');
    const value = parseInt(valueString, 10);

    const levelString = levelNode.textContent.replace(/\D/g, '');
    const level = parseInt(levelString, 10);

    if (!value || !level) {
        console.error('getGuildCardData: can not get value or level');

        return {
            value: -1,
            level: -1,
        };
    }

    return {value, level};
}
