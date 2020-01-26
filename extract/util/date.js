// @flow

function getTimezoneOffsetMS(): number {
    const date = new Date();

    return date.getTimezoneOffset() * 60 * 1000;
}

const timezoneOffsetMS = getTimezoneOffsetMS();

export function getTime(): number {
    const date = new Date();

    return date.getTime() + timezoneOffsetMS;
}

export function timeToHumanString(time: number): string {
    return new Date(time - getTimezoneOffsetMS())
        .toISOString()
        .replace(/\.\d{3}Z$/, '')
        .replace('T', ' ');
}
