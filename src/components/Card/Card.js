import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = props => {
  const {title} = props;
  return (
    <section className={styles.component}>
      <h4>{title}</h4>
    </section>
  );
};

Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
