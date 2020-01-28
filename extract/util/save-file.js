// @flow

/* global document, URL, fetch */

import type {NullableType} from '../extract-type';

export function saveDataAsJsonFile(fileName: string, data: {}): Promise<NullableType<Error>> {
    const uriContent = 'data:application/octet-stream,' + encodeURIComponent(JSON.stringify(data, null, 4) + '\n');

    return fetch(uriContent)
        .then((resp: Response): Promise<Blob> => resp.blob())
        .then((blob: Blob): null => {
            if (typeof document === 'undefined') {
                console.error('document is not define');

                return null;
            }

            const {body} = document;

            if (!body) {
                console.error('body is not define');

                return null;
            }

            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.style.display = 'none';
            link.href = downloadUrl;
            link.download = fileName + '.json';

            body.append(link);

            link.click();

            console.log('Your file has downloaded!'); // or you know, something with better UX...

            URL.revokeObjectURL(downloadUrl);

            body.removeChild(link);

            return null;
        })
        .catch((error: Error): Error => {
            console.error(error.message);

            return error;
        });
}
