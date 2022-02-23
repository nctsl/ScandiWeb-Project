import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  
];

const Features = () => (
  <div className="nstr__features section__padding" id="features">
    <div className="nstr__features-heading">
    </div>
    <div className="nstr__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
