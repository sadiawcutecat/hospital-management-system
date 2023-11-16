"use client";
import useAuth from '@/Components/hooks/useAuth';
import { useEffect, useState } from 'react';
import { FaCamera, FaFile, FaFileAlt, FaImage, FaPaperclip, FaPhone, FaVideo } from 'react-icons/fa';
import { FaCircleInfo, FaLinkSlash, FaMicrophoneLines } from 'react-icons/fa6';
import io from 'socket.io-client';

const Chat = () => {
  const {user}=useAuth();
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
    <div className=' shadow-xl bg-gradient-to-r from-cyan-50 to-gray-50 ... '>
      <div className="navbar absolute top-1 px-2 lg:px-7 z-10 bg-blue-500 shadow-2xl ">
  <div className="navbar-start ">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar active">
        <div className="w-8 lg:w-10 rounded-full ring">
          <img className="badge badge-xs badge-primary " alt="receiver" src={user.photoURL} />
        </div> 
      </label>
  
  
    <a className=" text-white text-xs lg:text-xl">{user.displayName}</a>
  </div>
  <div className="navbar-end ">
    <button  data-tip="audio call " className="btn tooltip  tooltip-bottom btn-ghost text-lg lg:text-2xl text-white btn-circle">
     <FaPhone/>
    
    </button>
    <button data-tip="Vedio call " className="btn btn-ghost tooltip  tooltip-bottom text-lg lg:text-2xl text-white btn-circle">
   
     <FaVideo/>
    </button>
    <button data-tip="Conditons " className="btn btn-ghost tooltip  tooltip-bottom text-white btn-circle">
      <div className="text-lg lg:text-2xl">
       <FaCircleInfo/>
      </div>
    </button>
  </div>
</div>
<div className='  h-[500px] lg:h-[800px] relative ' style={{  overflowY: 'scroll',  }}>
        {messages.map((msg, index) => (
          <div key={index}>
            {msg.sender}: {msg.text}
          </div>
        ))}
      </div>
      <div className='fixed bottom-1 flex justify-between items-center lg:w-[1500px] gap-2 lg:gap-8 px-2'>
       <div className='flex gap-2 lg:gap-7'>
       <button className='circle text-md lg:text-2xl tooltip' data-tip=" file"><FaPaperclip /></button>
       <button className='circle text-md lg:text-2xl tooltip' data-tip="microphone"> <FaMicrophoneLines /></button>
       <button className='circle text-md lg:text-2xl tooltip' data-tip="camera "> <FaCamera /></button>
       <button className='circle text-md lg:text-2xl tooltip' data-tip="gallery "> <FaImage /></button>
       </div>
     <div className='flex w-full'> <input type="text" value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}  className="input w-[150px] lg:w-full " />
       
        <button className='btn -translate-x-18' onClick={sendMessage}>Send</button></div>
      </div>
          

    </div>
  );
};

export default Chat;
