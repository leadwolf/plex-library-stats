import uuid from 'uuid/v4';

const CLIENT_ID = 'client_id';

export const getClientUUID = () => {
    const storedId = localStorage.getItem(CLIENT_ID);

    if (!storedId) {
        const newId = uuid();
        localStorage.setItem(CLIENT_ID, newId);
        return newId;
    }

    return storedId;
};
