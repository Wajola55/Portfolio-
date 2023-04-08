import React from 'react';
import './Card.css';

const Card = ({ django, title, detail }) => {
  return (
    <div className="card">
      <img src={django} alt="Django" />
      <span className="title">{title}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
