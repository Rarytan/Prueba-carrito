import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componets/Home/Home';
import CartContent from './componets/carrito/carrito';
import DataProvider from './componets/Context/DataContext';

function App() {
  return (
    <DataProvider>

      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/carrito" element={<CartContent />} />

        </Routes>

      </BrowserRouter>

    </DataProvider>
  );
}

export default App;