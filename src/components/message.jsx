import React from 'react';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  const date = new Date(created_at).toLocaleTimeString();

  return (
    <div className="message">
      <p>
        <span><strong>{author}</strong> à {date}</span><br />
        {content}
      </p>
    </div>
  );
};

export default Message;
