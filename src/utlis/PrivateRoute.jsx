// utils/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn ? <Element {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
