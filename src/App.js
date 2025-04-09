// App.js
import { Routes, Route } from 'react-router-dom';
import All from './pages/all';
import Cart from './pages/cart';
import ProductDetail from './pages/product-detail';
import NotFound from './pages/not-found';
import MainLayout from './layouts/mainlayout';
import { CartProvider } from './contexts/cartcontext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<All />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
