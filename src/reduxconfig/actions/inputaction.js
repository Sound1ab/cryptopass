export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_KEY = 'UPDATE_KEY';

export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE,
    message
});

export const updateKey = (encryptionKey) => ({
    type: UPDATE_KEY,
    encryptionKey
});