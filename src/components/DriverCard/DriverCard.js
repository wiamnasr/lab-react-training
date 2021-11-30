import React from 'react';

// Style
import { Wrapper } from './DriverCard.styles';

import PropTypes from 'prop-types';

// Components
import Rating from '../Rating/Rating';

const DriverCard = ({ name, rating, img, car }) => {
  const { model, licensePlate } = car;
  return (
    <Wrapper>
      <div className="imgDiv">
        <img src={img} alt={name} />
      </div>

      <div className="detailsDiv">
        <h2 className="driverName">{name}</h2>

        <Rating>{rating}</Rating>

        <h3>
          {model} - {licensePlate}
        </h3>
      </div>
    </Wrapper>
  );
};

DriverCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  img: PropTypes.string,
  car: PropTypes.object,
};

export default DriverCard;
