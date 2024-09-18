// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Peminjaman from './pages/Peminjaman';
import Pengembalian from './pages/Pengembalian';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
         {/* Tambahkan route di sini */}
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/Peminjaman" element={<Peminjaman />} /> */}
        {/* <Route path="/Pengembalian" element={<Pengembalian />} /> */}
      </Routes>
    </Router>
  );
};

export default App;