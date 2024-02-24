import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import SideBar from './AdminPanel/SideBar'
import DestinationType from './pages/DestinationType';
// Renamed 'Route' to 'AppRouter' to avoid naming conflict
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/destination" element={<DestinationPage />} />
        |<Route path="/AdminPortal" element={<SideBar/>} />
        |<Route path="/destinationtype" element={<DestinationType/>} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;

