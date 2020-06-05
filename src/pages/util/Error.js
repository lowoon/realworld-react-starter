import React from 'react';

function Error({ messages, name }) {
  return (
    messages && messages.map(message => <li key={message}>{name + " : " + message}</li>)
  );
}

export default Error;