export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const COPY_PASSWORD = 'COPY_PASSWORD';
export const REVEAL_PASSWORD = 'REVEAL_PASSWORD';

export const updatePassword = (password) => ({
	type: UPDATE_PASSWORD,
	password
});


export const copyPassword = () => ({
	type: COPY_PASSWORD,
});

export const revealPassword = () => ({
	type: REVEAL_PASSWORD,
})