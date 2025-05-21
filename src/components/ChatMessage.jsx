import React from 'react';
import PropTypes from 'prop-types';
import './ChatMessage.css';

const ChatMessage = ({ message, isUser }) => {
  // Função para formatar a resposta com HTML
  const formatResponse = (text) => {
    return {
      __html: text
        .replace(/\n/g, '<br>')
        .replace(/•/g, '&bull;')
        .replace(/(\(\d+\))/g, '<strong>$1</strong>')
    };
  };

  return (
    <div className={`message ${isUser ? 'user-message' : 'bot-message'}`}>
      {isUser ? (
        <p>{message}</p>
      ) : (
        <p dangerouslySetInnerHTML={formatResponse(message)} />
      )}
    </div>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
  isUser: PropTypes.bool.isRequired
};

export default ChatMessage; 