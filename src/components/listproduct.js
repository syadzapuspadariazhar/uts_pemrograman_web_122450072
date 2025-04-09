import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './product';

const ProductList = ({ products = [], onAddCart }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddCart={onAddCart}
          />
        ))}
      </div>
    );
  };
  

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddCart: PropTypes.func.isRequired
};

export default ProductList;
