import Axios from 'axios';
import { getClientUUID } from '../device/device';

export const signIn = (user, password) =>
    Axios.post(
        'https://plex.tv/users/sign_in.json',
        {
            'user[login]': user,
            'user[password]': password,
        },
        {
            headers: {
                'X-Plex-Client-Identifier': getClientUUID(),
                'X-Plex-Product': 'plex-library-stats',
                'X-Plex-Version': '1.0.0',
            },
        }
    );
