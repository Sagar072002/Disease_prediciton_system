import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () =>{
        const botMessage = createChatBotMessage("Hello! Nice to meet you.");

        setState((prev)=>({
            ...prev,
            messages: [...prev.messages, botMessage],
        }))
    }
    const handlePic = () =>{
      const botMessage = createChatBotMessage(
        "Here's a picture for you!",
        {
          widget: 'picture',
        }
      );

      setState((prev)=>({
        ...prev,
        messages: [...prev.messages, botMessage],
      }))
    }


  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handlePic,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;