import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AdminAuthContext from '../Context/AdminAuthContext';

const AdminPrivateRoute = ({ element: Element, ...rest }) => {
  const { isAdminLoggedIn } = useContext(AdminAuthContext);

  return isAdminLoggedIn ? <Element {...rest} /> : <Navigate to="/admin" replace />;
};

export default AdminPrivateRoute;
