const initialState = {
    users: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };

        case 'UPDATE_USER':
            const updatedUsers = state.users.map((user) =>
                user.userId === action.payload.userId ? action.payload : user
            );
            return {
                ...state,
                users: updatedUsers,
            };

        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.userId !== action.payload),
            };
        default:
            return state;
    }
};

export default usersReducer;
