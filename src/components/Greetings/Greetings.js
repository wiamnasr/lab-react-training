import React from 'react';

// Style
import { Wrapper } from './Greetings.styles';
import PropTypes from 'prop-types';

const Greetings = ({ lang, children }) => {
  return <Wrapper>Placeholder</Wrapper>;
};

Greetings.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.string,
};

export default Greetings;
