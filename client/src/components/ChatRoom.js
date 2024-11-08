import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { config } from '../config';
import MessageInput from './MessageInput';

const ChatRoom = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(config.url);
    setSocket(newSocket);

    newSocket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = (content) => {
    if (socket) {
      socket.emit('sendMessage', { sender: user._id, content });
    }
  };

  return (
    <div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.sender === user._id ? 'You' : 'Other'}:</strong> {message.content}
          </div>
        ))}
      </div>
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatRoom;
