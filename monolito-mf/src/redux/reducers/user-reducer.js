const initialState = {
    user: {},
    isAuth: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_SESSION':

            return {
                state,
                user: action.user,
                isAuth: action.isAuth
            }

        default:
            return state;
    }
}
export default usersReducer;