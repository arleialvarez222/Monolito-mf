/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.usersReducer.isAuth)

    //if (!isAuthenticated) { return < Navigate to="/auth/login" /> }

    return children

}

export default PrivateRoute