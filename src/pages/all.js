import React, { useEffect, useState } from 'react'; // ✅ untuk useEffect & useState
import { useOutletContext } from 'react-router-dom'; // ✅ untuk ambil search dari MainLayout
import ProductCard from '../components/product'; // ✅ untuk render product
import { useCart } from '../contexts/cartcontext'; // ✅ untuk add to cart

const All = () => {
  const [products, setProducts] = useState([]);
  const [filteredType, setFilteredType] = useState('all');
  const { searchKeyword } = useOutletContext(); // ✅ ambil dari context
  const { addCart } = useCart();

  useEffect(() => {
    fetch('https://67f60323913986b16fa63c9a.mockapi.io/products/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setProducts(data);
        else console.error('Data bukan array:', data);
      })
      .catch(error => console.error('Error fetch:', error));
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesType = filteredType === 'all' || product.type === filteredType;
    const matchesSearch = product.title.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f5d1b2] pb-10">
      <h2 className="text-3xl font-bold text-white mb-6 text-center drop-shadow mt-10">
        All Product
      </h2>

      {/* Filter Button */}
      <div className="flex justify-center gap-4 mb-8">
        {['all', 'cosmetic', 'skincare', 'bodycare'].map(type => (
          <button
            key={type}
            onClick={() => setFilteredType(type)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filteredType === type
                ? 'bg-white text-[#F7374F] shadow'
                : 'text-white hover:opacity-90'
            }`}
            style={filteredType !== type ? { backgroundColor: '#FA2A68' } : {}}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Produk tampil */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddCart={addCart}
            />
          ))}
        </div>
    </div>
  );
};

export default All;