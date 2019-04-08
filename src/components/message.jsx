import React from 'react';
import {emojify} from 'react-emojione';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  const date = new Date(created_at).toLocaleTimeString();
  const options = {
    style: {
        height: 22,
        margin: 4,
    },
  };

  return (
    <div className="message">
      <div>
        <span><strong>{author}</strong> à {date}</span>
      </div>
      <p>
        {emojify(content, options)}
      </p>
    </div>
  );
};

export default Message;
