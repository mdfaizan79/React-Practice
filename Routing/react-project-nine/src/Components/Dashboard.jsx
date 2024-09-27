import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard page-container">
      <h1>Dashboard</h1>
      <p>This is the dashboard where you can manage your account.</p>
      {/* For nested routing */}
      <Outlet /> 
    </div>
  );
}

export default Dashboard;
