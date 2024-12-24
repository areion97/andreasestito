import React from 'react';
import PropTypes from 'prop-types';

function Card({ children }) {
  return (
    <div className="card">
      <div className="content">
        <div className="cardContent">{children}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
