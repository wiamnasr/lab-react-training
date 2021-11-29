import React from 'react';

import PropTypes from 'prop-types';

// Style
import { Wrapper } from './BoxColor.styles';

const BoxColor = ({ r, g, b }) => {
  const boxColorStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  function rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1) {
      r = '0' + r;
    }

    if (g.length === 1) {
      g = '0' + g;
    }

    if (b.length === 1) {
      b = '0' + b;
    }

    return '#' + r + g + b;
  }
  return (
    <Wrapper style={boxColorStyle}>
      rgb({r},{g},{b})<br /> {rgbToHex(r, g, b)}
    </Wrapper>
  );
};

BoxColor.propTypes = {
  r: PropTypes.number,
  g: PropTypes.number,
  b: PropTypes.number,
};

export default BoxColor;
