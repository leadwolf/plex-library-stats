import Axios from 'axios';

import { XHR } from '../xhr/xhr';
import { getPlexHeaders } from './plexApiUtils';

export const signIn = (login, password) =>
    Axios.post(
        'https://plex.tv/users/sign_in.json',
        {
            user: {
                login,
                password,
            },
        },
        {
            headers: getPlexHeaders(),
        }
    );

export const getRemoteServers = () => XHR.get('/pms/servers.xml', { headers: getPlexHeaders() });
