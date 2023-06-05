import React, { useState } from 'react';
import ChatInput from './components/ChatInput'
import ChatOutput from './components/ChatOutput'

function ChatApp() {
  const [chatText, setChatText] = useState("");

  const handleGenerateChat = async (chatParams) => {
    const chatResult = await fetchChat(chatParams);
    setChatText(chatResult);
  }

  async function fetchChat({ celebrity1, celebrity2, topic }) {
    const response = await fetch('http://localhost:3001/generate-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ celebrity1, celebrity2, topic }),
    });

    const data = await response.json();
    return data.chatText;
  }

  return (
    <div>
      <ChatInput onGenerateChat={handleGenerateChat} />
      <ChatOutput chatText={chatText} />
    </div>
  );
}

export default ChatApp;