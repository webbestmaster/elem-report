// @flow

import type {
    GuildDataType,
    GuildManDataType,
    GuildsListDataType,
    ReportDataType,
} from '../../../../extract/extract-type';

import {siteLinkPrefix} from './guild-statistics-const';

export function getAllDeckValue(report: ReportDataType): number {
    const {manList} = report;

    let allDeckValue = 0;

    manList.forEach((man: GuildManDataType) => {
        allDeckValue += man.deckValue;
    });

    return allDeckValue;
}

export function getAverageDeckValue(report: ReportDataType): number {
    const {manList} = report;

    return Math.round(getAllDeckValue(report) / manList.length);
}

export function intWithSpaces(rawNumber: number): string {
    return rawNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function getNewMemberList(before: ReportDataType, after: ReportDataType): Array<GuildManDataType> {
    const newMemberList: Array<GuildManDataType> = [];

    after.manList.forEach((afterMan: GuildManDataType) => {
        const candidate = before.manList.find((beforeMan: GuildManDataType): boolean => {
            return afterMan.id === beforeMan.id;
        });

        if (candidate) {
            return;
        }

        newMemberList.push(afterMan);
    });

    return newMemberList;
}

export function getLeaveMemberList(before: ReportDataType, after: ReportDataType): Array<GuildManDataType> {
    const leaveMemberList: Array<GuildManDataType> = [];

    before.manList.forEach((beforeMan: GuildManDataType) => {
        const candidate = after.manList.find((afterMan: GuildManDataType): boolean => {
            return beforeMan.id === afterMan.id;
        });

        if (candidate) {
            return;
        }

        leaveMemberList.push(beforeMan);
    });

    return leaveMemberList;
}

export function getManById(manId: number, report: ReportDataType): GuildManDataType | void {
    return report.manList.find((man: GuildManDataType): boolean => man.id === manId);
}

export function getGuildById(guildId: string, guildListData: GuildsListDataType): GuildDataType | void {
    return guildListData.guildList.find((guild: GuildDataType): boolean => guild.guildId === guildId);
}

export function htmlToBbCode(html: string): string {
    // const html = '<center><b><font color="#FF9A71">꧁ ТОП КОЛОД ꧂</font></b><br><br><font color="#FFDFD2">1. Mymyi [1 145 858] - ⇧<br>2. Пушистый Пипец [146 436]<br>3. Sashache [135 234]<br>4. Ведьмак [131 818]<br>5. Melysta [130 189]<br>6. Mendax [119 250]<br>7. Roader [118 387]<br>8. Призрачная Встречная [115 062]<br>9. Dame Sorciere [111 467]<br></font></center>'

    return (
        html
            // <center> to [center]
            .replace(/<center>/gi, '[center]')
            // </center> to [/center]
            .replace(/<\/center>/gi, '[/center]')

            // <br> to [br]
            .replace(/<br>/gi, '[br]')

            // <br/> to [br]
            .replace(/<\/br>/gi, '[/br]')

            // <b> to [b]
            .replace(/<b>/gi, '[b]')
            // </b> to [/b]
            .replace(/<\/b>/gi, '[/b]')

            // <font color="#123456"> to [color=#123456]
            .replace(/<font color="#(\w+)">/gi, '[color=#$1]')
            // </font> to [/color]
            .replace(/<\/font>/gi, '[/color]')

            // <a href="link"> to [url=link]
            .replace(/<a [\S\s]+?>/gi, (selectedString: string): string => {
                const hrefValue = selectedString.replace(/([\S\s]+?href=")([\S\s]+?)("[\S\s]+)/gi, '$2');
                const cleanHref = hrefValue.replace(siteLinkPrefix + '/', '');

                return `[url=${cleanHref}]`;
            })
            // </a> to [/url]
            .replace(/<\/a>/gi, '[/url]')

            // <img ...stuff here... > to [img]...stuff here...[/img]
            .replace(/<img [\S\s]+?>/gi, (selectedString: string): string => {
                const srcValue = selectedString.replace(/([\S\s]+?src=")([\S\s]+?)("[\S\s]+)/gi, '$2');
                const cleanSrc = srcValue.replace(siteLinkPrefix + '/', '');
                const width = selectedString.replace(/([\S\s]+?width=")([\S\s]+?)("[\S\s]+)/gi, '$2') || 18;

                return `[img=${width}]${cleanSrc}[/img]`;
            })
    );
}
