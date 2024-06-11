import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Feed from '../pages/Feed';
import Produtos from '../pages/Produtos';
import More from '../pages/More';
import Update from '../pages/Update';


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/more/:id" element={<More />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}

export default AppRouter;
