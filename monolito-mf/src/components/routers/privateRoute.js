import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { CONSTAPP } from './constants';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.usersReducer.isAuth)

    if (!isAuthenticated) {
        //return <Navigate to={CONSTAPP.LOGIN} />
    }

    return children;
}

export default PrivateRoute