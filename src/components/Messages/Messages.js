import React, { useEffect, useRef } from "react";
import "./Messages.css";

const Messages = (props) => {
  const { messages, currentMember } = props;
  const messagesListRef = useRef(null);

  // Scroll to the bottom of the messages list when new messages are added
  useEffect(() => {
    if (messagesListRef.current) {
      messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
    }
  }, [messages]);

  // Render each individual message in the list
  const renderMessage = (message, index) => {
    const messageFromMe = message.member.username === currentMember.username;

    // Apply a CSS class to the message depending on whether it was sent by the current user or not
    const className = messageFromMe ? "Messages-message currentMember" : "Messages-message";

    return (
      <li key={index} className={className}>
        <span className="avatar" style={{ backgroundColor: message.member.color }} />
        <div className="Message-content">
          <div className="username">{message.member.username}</div>
          <div className="text">{message.text}</div>
        </div>
      </li>
    );
  };

  return (
    // Create a messages list and attach a reference to the DOM node
    <ul className="Messages-list" ref={messagesListRef}>
      {messages.map(renderMessage)}
    </ul>
  );
};

export default Messages;
