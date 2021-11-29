import React from 'react';

// Style
import { Wrapper } from './Greetings.styles';
import PropTypes from 'prop-types';

const Greetings = ({ lang, children }) => {
  const greetingLanguage = (passedLang) => {
    if (!passedLang.match(/^(de|en|es|fr)$/) || passedLang === 'en') {
      // defaults to english if any other language provided
      return 'Hello';
    } else if (passedLang === 'fr') {
      return 'Bonjour';
    } else if (passedLang === 'de') {
      return 'Hallo';
    } else if (passedLang === 'es') {
      return 'Hola';
    }
  };

  return <Wrapper>{`${greetingLanguage(lang)} ${children}`}</Wrapper>;
};

Greetings.propTypes = {
  lang: PropTypes.string,
  children: PropTypes.string,
};

export default Greetings;
