import { createChatBotMessage } from 'react-chatbot-kit';
import Picture from './Widgets/Picture';

const botName = 'Consultation Bot'

const config = {
  initialMessages: [createChatBotMessage(`I am your ${botName}`)],
  widgets: [
    {
      widgetName: 'picture',
      widgetFunc: (props) => <Picture {...props} />,
    },
  ],
  botName: botName,
  customStyles:{
    botMessageBox:{
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;