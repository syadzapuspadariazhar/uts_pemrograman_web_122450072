import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating }) => (
  <div className="flex text-yellow-500">
    {Array.from({ length: 5 }, (_, index) => (
      <span key={index}>{index < Math.round(rating) ? '★' : '☆'}</span>
    ))}
  </div>
);

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarRating;
