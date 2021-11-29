import React from 'react';

import { Wrapper, Content } from './IdCard.styles';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <Wrapper>
      <img src={picture} alt={`${firstName}`} />
      <Content>
        {[
          <h4>
            <span className="fields">First name: </span>
            {firstName}
          </h4>,
          <h4>
            <span className="fields">Last name: </span>
            {lastName}
          </h4>,
          <h4>
            <span className="fields">Gender: </span>
            {gender}
          </h4>,
          <h4>
            <span className="fields">Height: </span>
            {height}
          </h4>,
          <h4>
            <span className="fields">Birth: </span>
            {birth.toLocaleDateString('en-GB', options)}
          </h4>,
        ].map((field, index) => (
          <li key={index}>{field}</li>
        ))}
      </Content>
    </Wrapper>
  );
};

export default IdCard;
