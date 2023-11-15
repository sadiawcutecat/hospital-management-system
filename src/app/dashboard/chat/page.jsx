"use client";
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Chat = ({ user, recipient }) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to the Socket.io server
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Listen for incoming messages
    newSocket.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    // Clean up when component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && messageInput.trim() !== '') {
      const newMessage = {
        sender: user,
        recipient,
        text: messageInput,
      };

      // Emit the new message to the server
      socket.emit('message', newMessage);

      // Update the local state with the new message
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Clear the message input
      setMessageInput('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.sender}: {msg.text}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
