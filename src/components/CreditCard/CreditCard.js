import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './CreditCard.styles';

import visaLogo from '../../images/visa-logo-svg-vector.svg';
import masterCardLogo from '../../images/mastercard-logo.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const verifyCardType = () => {
    if (type.toLowerCase() === 'visa') {
      return visaLogo;
    } else if (type.toLowerCase() === 'master card') {
      return masterCardLogo;
    }
  };

  const hideCardNumber = () => {
    let numSplit = number.toString().split('');

    return numSplit
      .map((num, index) => (index < numSplit.length - 4 ? (num = '·') : num))
      .join('')
      .match(/.{1,4}/g)
      .join(' ');
  };

  const monthFormatter = () => {
    if (expirationMonth > 0 && expirationMonth <= 12) {
      if (expirationMonth < 10) {
        return `0${expirationMonth}`;
      } else {
        return expirationMonth;
      }
    }
  };

  const yearFormatter = () => expirationYear.toString().substr(-2);

  return (
    <Wrapper style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
      <img src={verifyCardType()} alt="credit-card" />

      <h2>{hideCardNumber()}</h2>
      <div className="cardDetails">
        <p className="cardExpiry">
          Expires {monthFormatter()}/{yearFormatter()}
        </p>
        <p className="bankName">{bank}</p>
        <p className="customerName">{owner}</p>
      </div>
    </Wrapper>
  );
};

CreditCard.propTypes = {
  type: PropTypes.string,
  number: PropTypes.string,
  expirationMonth: PropTypes.number,
  expirationYear: PropTypes.number,
  bank: PropTypes.string,
  owner: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
};

export default CreditCard;
