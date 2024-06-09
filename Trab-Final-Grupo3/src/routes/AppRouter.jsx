import React from 'react'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/new" element={<Produtos />} />
      <Route path="/more" element={<More />} />
      <Route path="/update" element={<Update />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  );
}

export default AppRouter;