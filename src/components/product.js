// src/components/productcard.js
import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './starrating'; 
import { Link } from 'react-router-dom';

const ProductCard = ({
  product,
  onAddCart,
  onRemoveCart,
  showButtons = true,
  showRemove = false,
}) => {
  console.log('GAMBAR PRODUK:', product.thumbnail);
  return (
    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-4 w-64 shadow-lg text-white">
      <Link to={`/product/${product.id}`} className="flex flex-col items-center text-center space-y-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-48 w-full object-cover mb-2 rounded"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x200?text=No+Image";
          }}
        />
        <h3 className="text-lg font-bold">{product.title}</h3>
        <StarRating rating={product.rating} />
        <p className="text-sm">{product.description?.slice(0, 50)}...</p>
      </Link>
  
      <div className="flex justify-between items-center mt-4">
        <span className="bg-[#FA2A68] hover:bg-gray-200 transition-colors px-3 py-1 rounded-full text-sm font-semibold">
          ${product.price}
        </span>
        {showButtons && (
          <button
            onClick={() => onAddCart?.(product)}
            className="bg-white text-[#FA2A68] hover:bg-gray-200 transition-colors px-3 py-1 rounded-full text-sm font-semibold"
          >
            Add
          </button>
        )}
      </div>
  
      {showRemove && onRemoveCart && (
        <div className="flex justify-end mt-2">
          <button
            onClick={onRemoveCart}
            className="bg-[#FA2A68] hover:opacity-90 text-white px-4 py-2 rounded transition"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );  
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  onAddCart: PropTypes.func,
  onRemoveCart: PropTypes.func,
  showButtons: PropTypes.bool,
  showRemove: PropTypes.bool,
};

export default ProductCard;
