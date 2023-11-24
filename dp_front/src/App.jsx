import React from 'react'
import Chatbot from 'react-chatbot-kit'
import Config from './Components/Chatbot/chatbotConfig'
import ActionProvider from './Components/Chatbot/ActionProvider'
import MessageParser from './Components/Chatbot/MessageParser'
import 'react-chatbot-kit/build/main.css';

const App = () => {
  return (
    <div>
      <Chatbot
        config= { Config }
        messageParser = { MessageParser }
        actionProvider= { ActionProvider }
      />
    </div>
  )
}

export default App
