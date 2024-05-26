import React, { useState } from 'react';
import './App.css'; 

const PriceCard = ({ plan, price, features, disabledFeatures }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleButtonClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="price-card">
      <h2>{plan}</h2>
      <div className="price-container">
        <div className="price">${price}</div>
        <span>/month</span>
      </div>
      <hr className="grayed-line" /> 
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index} className={disabledFeatures.includes(index) ? 'disabled' : ''}>
            {disabledFeatures.includes(index) ? (
              <span className="icon">&#10006;</span> 
            ) : (
              <span className="icon">&#10004;</span> 
            )}
            {feature}
          </li>
        ))}
      </ul>
      {!showMessage ? (
        <button className="btn" onClick={handleButtonClick}>Get Plan</button>
      ) : (
        <div className="message">Thank you for choosing the {plan} package</div>
      )}
    </div>
  );
};

const App = () => {
  const plans = [
    {
      plan: 'FREE',
      price: 0,
      features: ['Single User', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects', 'Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
      disabledFeatures: [4, 5, 6, 7] 
    },
    {
      plan: 'PLUS',
      price: 9,
      features: ['5 Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects','Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
      disabledFeatures: [7] 
    },
    {
      plan: 'PRO',
      price: 49,
      features: ['Unlimited Users', '50GB Storage', 'Unlimited Public Projects', 'Community Access', 'Unlimited Private Projects','Dedicated Phone Support', 'Free Subdomain', 'Monthly Status Reports'],
      disabledFeatures: [] 
    }
  ];

  return (
    <div className="App">
      <div className="price-cards-container">
        {plans.map((plan, index) => (
          <PriceCard
            key={index}
            plan={plan.plan}
            price={plan.price}
            features={plan.features}
            disabledFeatures={plan.disabledFeatures}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
