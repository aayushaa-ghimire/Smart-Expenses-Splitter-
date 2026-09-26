import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CreateGroup from '../pages/CreateGroup';
import GroupDetails from '../pages/GroupDetails';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-group" element={<CreateGroup />} />
      <Route path="/group/:id" element={<GroupDetails />} />
    </Routes>
  );
}