import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
    description: settings.defaultCardDescription,
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section >
    );
  }
}

export default SearchResults; 