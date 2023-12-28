export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    };
};

export const deleteUser = (userId) => ({
    type: 'DELETE_USER',
    payload: userId,
});

export const updateUser = (updatedUserData) => {
    return {
        type: 'UPDATE_USER',
        payload: updatedUserData,
    };
};
