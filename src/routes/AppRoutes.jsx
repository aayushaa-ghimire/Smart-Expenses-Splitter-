import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CreateGroup from '../pages/CreateGroup';
import GroupDetails from '../pages/GroupDetails';
import Profile from '../pages/Profile';
import Activity from '../pages/Activity';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="create-group" element={<CreateGroup />} />
      <Route path="group/:id" element={<GroupDetails />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  );
}