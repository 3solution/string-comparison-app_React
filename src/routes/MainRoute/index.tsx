import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';

const MainRoute: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/*' element={<Navigate replace to='/' />} />
  </Routes>
);

export default MainRoute;
