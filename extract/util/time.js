// @flow

/* global setTimeout */

function getTimezoneOffsetMS(): number {
    const date = new Date();

    return date.getTimezoneOffset() * 60 * 1000;
}

const timezoneOffsetMS = getTimezoneOffsetMS();

export function getTime(): number {
    const date = new Date();

    return date.getTime() + timezoneOffsetMS;
}

export function waitForTime(timeInMs: number): Promise<void> {
    return new Promise<void>((resolve: () => void) => {
        setTimeout(resolve, timeInMs);
    });
}

export function timeToHumanString(time: number): string {
    return new Date(time - timezoneOffsetMS)
        .toISOString()
        .replace(/\.\d{3}Z$/, '')
        .replace('T', '_');
}

export function timeToFileNameString(time: number): string {
    return new Date(time - timezoneOffsetMS)
        .toISOString()
        .replace(/:/g, '-')
        .replace(/\.\d{3}Z$/, '')
        .replace('T', '-');
}
