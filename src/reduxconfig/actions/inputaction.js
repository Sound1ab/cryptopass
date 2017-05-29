export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const UPDATE_KEY = 'UPDATE_KEY';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updateMessage = (message) => ({
    type: UPDATE_MESSAGE,
    message
});

export const updateKey = (encryptionKey) => ({
    type: UPDATE_KEY,
    encryptionKey
});

export const updatePassword = (password) => ({
    type: UPDATE_PASSWORD,
    password
});
