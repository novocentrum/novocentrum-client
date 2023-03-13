import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentPage from "./pages/ContentPage";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContentPage />} />
        <Route path="/admin" exact={true} element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
