// @flow

/* global document, fetch */

export async function getNodeFromUrl(url: string): Promise<HTMLElement> {
    const resp = await fetch(url);
    const result = await resp.text();
    const newDocument = document.createElement('html');

    newDocument.innerHTML = result;

    return newDocument;
}
