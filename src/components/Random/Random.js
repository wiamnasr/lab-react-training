import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Random.styles';

const Random = ({ min, max }) => {
  return (
    <Wrapper>
      Random Value Between {min} and {max} =>{' '}
      {Math.floor(Math.random() * (max + 1 - min) + min)}
    </Wrapper>
  );
};

Random.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Random;
