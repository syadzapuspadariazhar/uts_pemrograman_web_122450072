import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../components/starrating';
import { useCart } from '../contexts/cartcontext';
import ProductCard from '../components/product';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await fetch(`https://67f60323913986b16fa63c9a.mockapi.io/products/products/${id}`);
      const data = await res.json();
      setProduct(data);
  
      // Fetch related products by type using query parameter
      const resRelated = await fetch(`https://67f60323913986b16fa63c9a.mockapi.io/products/products?type=${data.type}`);
      const relatedData = await resRelated.json();
  
      // Filter out the current product from related
      const filtered = relatedData.filter(p => p.id !== data.id);
      setRelated(filtered);
    };
  
    fetchDetail();
  }, [id]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-6">
        <img src={product.thumbnail} alt={product.title} className="w-64 h-64 rounded object-cover" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <StarRating rating={product.rating} />
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="mt-4 font-semibold text-lg">Category: {product.category}</p>
          <p className="text-xl font-bold mt-2 text-red-500">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.slice(0, 3).map((item) => (
              <ProductCard key={item.id} product={item} showButtons />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
