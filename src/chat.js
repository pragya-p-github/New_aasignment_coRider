import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chat.css';


const Chat = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const response = await axios.get(
        'https://qa.corider.in/assignment/chat?page=0'
      );
      const newChats = response.data.chats;
      const sortedChats = newChats.sort((a, b) => new Date(a.time) - new Date(b.time)); // Sort chats based on time
      setChats(sortedChats);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chats:', error);
      setLoading(false);
    }
  };



  return (
    <div className="chat-container">
      <header>
        <h1>Chat Screen</h1>
        {/* Add your three dots icon and its functionality here */}
      </header>
      <div className="chat-content">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="chat-list">
            {chats.map((chat) => (
              <li
                key={chat.id}
                className={`chat-item ${chat.sender.self ? 'self-chat' : ''}`}
              >
                {chat.sender.self ? (
                  <div className="chat-box self-chat">
                    <div className="chat-message">{chat.message}</div>
                    {/* <div className="chat-time">{getFormattedTime(chat.time)}</div> */}
                  </div>
                ) : (
                  <>
                    <div className="circular-image">
                      <img src={chat.sender.image} alt="Sender" />
                    </div>
                    <div className="chat-box other-message-box">
                      <div className="chat-message">{chat.message}</div>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Chat;
