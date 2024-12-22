import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/home.module.scss';

function Card({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.cardContent}>{children}</div>
      </div>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
