import React from 'react';

import { Wrapper } from './Random.styles';

const Random = ({ min, max }) => {
  return (
    <Wrapper>
      Random Value Between {min} and {max} =>{' '}
      {Math.floor(Math.random() * (max + 1 - min) + min)}
    </Wrapper>
  );
};

export default Random;
