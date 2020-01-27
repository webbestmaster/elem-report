// @flow

/* global FileReader */

import {typeConverter} from './type';

function getFileAsTest(file: File): Promise<string> {
    return new Promise<string>((resolve: (data: string) => void) => {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
            resolve(String(reader.result));
        });

        reader.readAsText(file);
    });
}

export function getFileAsJson<Type>(file: File): Promise<Type> {
    return getFileAsTest(file).then((fileAsText: string): Type => {
        return typeConverter<Type>(
            // $FlowFixMe
            JSON.parse(fileAsText)
        );
    });
}
