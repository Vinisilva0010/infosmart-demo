import React from 'react';
import PropTypes from 'prop-types';
import './SuggestionItem.css';

const SuggestionItem = ({ text, onClick }) => {
  return (
    <div className="suggestion-item" onClick={() => onClick(text)}>
      {text}
    </div>
  );
};

SuggestionItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SuggestionItem; 