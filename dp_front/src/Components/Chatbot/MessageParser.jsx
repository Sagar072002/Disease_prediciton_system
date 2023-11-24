import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if(message.includes("hello")){
        console.log('hi')
        actions.handleHello();
    }

    if(message.includes("pic")){
      console.log('pic')
      actions.handlePic();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;