import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Header from './components/Header';
import AccountPage from './pages/AccountPage';
import AdminDashboard from './components/AdminDashboard';
import NotAuthorizedPage from './pages/NotAuthorizedPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import AProposPage from './pages/AProposPage';
import Services from './pages/ServicePage';
import FloatingBubbles from './components/FloatingBubbles';
import DevisPage from './pages/DevisPage';

function App() {
  return (
    <Router>
      <FloatingBubbles />
        <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/infos" element={<AProposPage />} />
            <Route path="/devis" element={<PrivateRoute><DevisPage /></PrivateRoute>} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<PrivateRoute><ContactPage /></PrivateRoute>} />
            <Route path="/not-authorized" element={<NotAuthorizedPage />} />
            <Route path="/account" element={<PrivateRoute><AccountPage /></PrivateRoute>} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;