// @flow

import type {GuildManDataType, ReportDataType} from '../../../../extract/extract-type';

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
