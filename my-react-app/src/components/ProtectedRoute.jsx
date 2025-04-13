import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('auth') === 'true';
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/?denied=true" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
