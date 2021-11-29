import React from 'react';

// Style
import { Wrapper } from './Rating.styles';

import PropTypes from 'prop-types';

const Rating = ({ children }) => {
  const starRating = () => {
    let roundedRating = Math.round(children);
    let ratingSelector = ['☆', '☆', '☆', '☆', '☆'];
    console.log(roundedRating);
    if (roundedRating === 0) {
      return ratingSelector.join(' ');
    } else {
      for (let i = 0; i < roundedRating; i++) {
        ratingSelector[i] = '★';
      }
      return ratingSelector.join(' ');
    }
  };

  return <Wrapper>{starRating()}</Wrapper>;
};

Rating.propTypes = {
  children: PropTypes.string,
};

export default Rating;
