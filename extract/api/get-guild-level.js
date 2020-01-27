// @flow

// Светло-бежевым цветом жирным шрифтом слова "Боевой рейтинг", пробел, светло-бежевое тире, пробел. Далее зеленым цветом цифра со страницы

import {getNodeFromUrl} from '../util/get-data';
import type {NullableType} from '../extract-type';

export async function getGuildLevel(): Promise<NullableType<number>> {
    const newDocument = await getNodeFromUrl('/ratings/guild/war/');
    const levelNode = newDocument.querySelector('.num.c_orange');

    if (!levelNode) {
        console.error('getGuildLevel: can not get levelNode');

        return null;
    }

    const level = parseInt(levelNode.textContent, 10);

    if (!level) {
        console.error('getGuildLevel: can not get level');

        return null;
    }

    return level;
}
