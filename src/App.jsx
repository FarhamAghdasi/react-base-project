import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthProvider, useAuth } from './components/api/AuthContext';
import './index.css';

import components from './components/Loader';
const { LoadEffect, Footer } = components;

import Home from './pages/Home';
import Page404 from './pages/Page404';
import Login from './pages/Login';
import SignUp from './pages/Signup';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function RedirectIfLoggedIn({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" /> : children;
}

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AuthProvider>
      {loading && <LoadEffect />}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/signup" element={<RedirectIfLoggedIn><SignUp /></RedirectIfLoggedIn>} />
        <Route path="/login" element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
