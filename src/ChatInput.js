import React, { useState } from 'react';
import './ChatInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faCamera, faVideo, faFileAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [showAttachmentOptions, setShowAttachmentOptions] = useState(false);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    // Send the message logic
    console.log('Sending message:', message);
    // Add your logic to handle sending the message here
    // For example, you can call an API to send the message to the server
    // and reset the message state after sending.
    setMessage('');
  };

  const handleAttachment = () => {
    // Attachment logic
    console.log('Opening attachment options');
    // Add your logic to handle attachments here
    // For example, you can display a menu or a dialog to select attachment types.
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        className="chat-text-input"
        placeholder="Reply to....."
        value={message}
        onChange={handleChange}
      />
      <div className="chat-input-buttons">
        <button className="chat-attachment-button" onClick={handleAttachment}>
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
        {showAttachmentOptions && (
          <div className="attachment-options">
            <button className="option-item">
              <FontAwesomeIcon icon={faCamera} />
            </button>
            <button className="option-item">
              <FontAwesomeIcon icon={faVideo} />
            </button>
            <button className="option-item">
              <FontAwesomeIcon icon={faFileAlt} />
            </button>
          </div>
        )}
        <button className="chat-send-button" onClick={handleSend}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};
export default ChatInput;
