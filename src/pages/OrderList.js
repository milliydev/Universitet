import React, { useState, useEffect } from 'react';
import '../style/orderList.css';

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // This is where you would set up a connection to your real-time database or WebSocket
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'Admin' }]);
      setNewMessage('');
    }
  };

  return (
  <div className="container-chat">
    <div className="chat-container">
      <div className="chat-header">Chat with Teacher</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>

    </div>
  );
}

export default ChatBox;
