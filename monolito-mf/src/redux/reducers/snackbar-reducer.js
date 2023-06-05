const initialState = {
    openSnackbar: false,
    message: null
}

const snackbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SNACKBAR_APP':

            return {
                ...state,
                openSnackbar: action.openSnackbar,
                message: action.message
            }

        default:
            return state;
    }
}
export default snackbarReducer