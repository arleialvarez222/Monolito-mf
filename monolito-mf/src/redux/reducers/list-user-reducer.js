const initialState = {
    users: [
        { name: 'Arlei', lastName: 'Alvarez', email: 'arlei222@gmail.com', password: '123abc' }
    ]
}

const listUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIST_USERS':

            return {
                state,
                users: action.users
            }

        default:
            return state;
    }
}
export default listUsersReducer;