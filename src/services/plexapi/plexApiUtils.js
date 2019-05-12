import { getClientUUID } from '../device/device';

export const getPlexHeaders = () => ({
    'X-Plex-Client-Identifier': getClientUUID(),
    'X-Plex-Product': 'plex-library-stats',
    'X-Plex-Version': '1.0.0',
});
