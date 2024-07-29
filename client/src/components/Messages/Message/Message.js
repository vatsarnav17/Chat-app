import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  // Add a check to ensure name is defined before calling .trim()
  const trimmedName = name ? name.trim().toLowerCase() : '';

  console.log(`User: ${user.trim().toLowerCase()}`);
  console.log(`TrimmedName: ${trimmedName}`);

  if (user.trim().toLowerCase() === trimmedName) {
    isSentByCurrentUser = true;
  }

  console.log(`IsSentByCurrentUser: ${isSentByCurrentUser}`);

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10">{user}</p>
        </div>
      )
  );
}

export default Message;
