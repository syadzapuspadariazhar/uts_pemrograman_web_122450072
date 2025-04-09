import React from 'react';
import { useCart } from '../contexts/cartcontext';
import ProductCard from '../components/product';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-[#f5d1b2] py-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow">Your Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-white text-center">No products in your cart.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {cart.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              showButtons={false}
              showRemove={true}
              onRemoveCart={() => removeFromCart(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
