import {  Route, Routes } from 'react-router-dom';
import HomeView from '../Views/HomeView.jsx';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
    </Routes>
  );
}

export default AllRoutes;