// @flow

// Светло-бежевым цветом жирным шрифтом слова "Уровень алтаря", пробел, светло-бежевое тире, пробел. Далее зеленым цветом цифра со страницы

import {getNodeFromUrl} from '../util/get-data';

export async function getAltarLevel(): Promise<number> {
    const newDocument = await getNodeFromUrl('/guild/graids/tweens/');
    const levelNode = newDocument.querySelector('.fttl.green.mt5.mb10 .lf .rt');

    if (!levelNode) {
        console.error('getAltarLevel: can not get levelNode');
        return -1;
    }

    const numberString = levelNode.textContent.replace(/\D/g, '');

    const level = parseInt(numberString, 10);

    if (!level) {
        console.error('getAltarLevel: can not get level');
        return -1;
    }

    return level - 1;
}
