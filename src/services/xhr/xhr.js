import Axios from 'axios';

import { parserInterceptor } from './xhrInterceptors';

const XHR = Axios.create({
    baseURL: 'https://plex.tv',
});

XHR.interceptors.response.use(parserInterceptor);

export { XHR };
