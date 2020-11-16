import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

const Column = props => { 
  const {title, icon, cards, addCard} = props;
  return (
    <section className={styles.component}>
      <h3 className={styles.title}>
        <span className={styles.icon}><Icon name={icon}/></span>
        {title}
      </h3>
      
      <div className={styles.cards}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.cardCreatorText} action={addCard}/>
      </div> 
    </section>
  );
};

Column.propTypes = {
  title: PropTypes.node,
  cards: PropTypes.array,
  icon: PropTypes.node,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;
