import Axios from 'axios';
import { getClientUUID } from '../device/device';

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
            headers: {
                'X-Plex-Client-Identifier': getClientUUID(),
                'X-Plex-Product': 'plex-library-stats',
                'X-Plex-Version': '1.0.0',
            },
        }
    );
