// @flow

// Светло-бежевым цветом жирным шрифтом слова "Боевой рейтинг", пробел, светло-бежевое тире, пробел. Далее зеленым цветом цифра со страницы

import {getNodeFromUrl} from '../util/get-data';

export async function getGuildLevel(): Promise<number> {
    const newDocument = await getNodeFromUrl('/ratings/guild/war/');
    const levelNode = newDocument.querySelector('.num.c_orange');

    if (!levelNode) {
        console.error('getGuildLevel: can not get levelNode');
        return -1;
    }

    const level = parseInt(levelNode.innerHTML, 10);

    if (!level) {
        console.error('getGuildLevel: can not get level');
        return -1;
    }

    return level;
}
