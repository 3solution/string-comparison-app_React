import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainRoute from './routes/MainRoute';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainRoute />} />
        <Route path='/*' element={<Navigate replace to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
