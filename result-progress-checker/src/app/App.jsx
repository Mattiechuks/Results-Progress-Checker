import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import ContactForm from './ContactForm';
import BlogPost from './BlogPost';
import About from './About';
import Footer from './Footer';
import Login from './Login';
import AdminLogin from './AdminLogin';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import ResultOverview from './ResultOverview';
import Notifications from './Notifications';
import ProfileManagement from './ProfileManagement';
import UserManagement from './UserManagement';
import ResultUpload from './ResultUpload';
import AdminAnalytics from './AdminAnalytics';
import NDLevel from './NDLevel';
import HNDLevel from './HNDLevel';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} />
    </Router>
  );
};

const AppContent = ({ isAuthenticated }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/admin-login';

  return (
    <div className={`app-container ${isLoginPage ? 'login-page' : ''}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        {/* Temporarily accessible routes for testing */}
        <Route path="/user-dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <UserDashboard />
          </ProtectedRoute>
        }>
          <Route path="overview" element={<ResultOverview />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<ProfileManagement />} />
          <Route path="nd" element={<NDLevel />} />
          <Route path="hnd" element={<HNDLevel />} />
        </Route>
        <Route path="/admin-dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AdminDashboard />
          </ProtectedRoute>
        }>
          <Route path="user-management" element={<UserManagement />} />
          <Route path="result-upload" element={<ResultUpload />} />
          <Route path="analytics" element={<AdminAnalytics />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
