import { parseString } from 'xml2js';

const xmlToJS = (str, options = {}) =>
    new Promise((resolve, reject) => {
        parseString(
            str,
            {
                ...options,
                attrkey: 'attributes',
            },
            (err, jsonObj) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(jsonObj);
                }
            }
        );
    });

export const parserInterceptor = response => {
    const { data: rawData, headers } = response;

    if (headers['content-type'].indexOf('xml') > -1) {
        return xmlToJS(rawData).then(data => ({
            ...response,
            data,
        }));
    }

    return Promise.resolve(response);
};
