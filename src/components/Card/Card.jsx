import React from 'react';
import './Card.css';

function Card({ header, content, link, image }) {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <div className="card-content">
            <h3 className="card-header">{header}</h3>
            <p className="card-text">{content}</p>
            <a
              href={link}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
          <img src={image} alt={header} className="card-image" />
        </div>
      </div>
    </>
  );
}

export default Card;