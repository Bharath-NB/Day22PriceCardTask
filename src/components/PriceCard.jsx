import React from 'react';

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="price-card">
      <h2>{plan}</h2>
      <div className="price">${price}<span>/month</span></div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="btn">Choose Plan</button>
    </div>
  );
};

export default PriceCard;
