import React, { useState } from 'react';
import './Chatbot.css';
import { FiSend, FiMic, FiUser } from 'react-icons/fi';
import { HiPaperClip, HiChatAlt2 } from "react-icons/hi";
import Fuse from 'fuse.js';  // Import fuse.js for fuzzy matching

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'How can I help you? 😊' } 
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (userInput.trim()) {
      // User message
      const userMessage = { from: 'user', text: userInput };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Show typing indicator
      setIsTyping(true);

      // Generate response after delay
      setTimeout(() => {
        const botResponse = generateBotResponse(userInput);
        setMessages((prevMessages) => [
          ...prevMessages,
          { from: 'bot', text: botResponse }
        ]);
        setIsTyping(false); 
      }, Math.random() * 3000 + 3000); 
      // Clear the input field
      setUserInput('');
    }
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  // Function to generate a bot response based on keywords and fuzzy matching
  const generateBotResponse = (input) => {
    // Convert input to lowercase for easier matching
    input = input.toLowerCase();

    // Define a list of possible responses and their associated keywords
    const responses = [
      { keyword: ['hello', 'hi', 'good morning', 'hey', 'good afternoon'], response: 'Hello! How can I assist you today?' },
      { keyword: ['help'], response: 'Sure! Let me know what you need help with.' },
      { keyword: ['time'], response: `The current time is ${new Date().toLocaleTimeString()}.` },
      { keyword: ['product price','money','buy','purchase'], response: 'The price of our product starts at 50 dollars with Base Features!' },
      { keyword: ['what sustachio', 'sustachio'], response: 'Sustachio is producing 100% compostable tableware products for people and earth.' },
      { keyword: ['bye', 'see you'], response: 'Goodbye! Have a great day!' },
      { keyword: ['kind', 'type','foodware'], response: 'Goodbye! Have a great day!' },
      { keyword: ['where', 'location','address'], response: 'Goodbye! Have a great day!' },
      { keyword: ['tip', 'compost','how can','product'], response: 'Goodbye! Have a great day!' },
      { keyword: ['feature', 'product type','microwave','bio fertilizer','solution','pistahio','shell','beer','waste'], response: 'Goodbye! Have a great day!' },
      { keyword: ['delivery', 'service','how to delivery'], response: 'Goodbye! Have a great day!' }
    ];

    // Set up Fuse.js for fuzzy matching
    const fuse = new Fuse(responses, {
      keys: ['keyword'],      // Search for keywords
      threshold: 0.3,         // Set the threshold for fuzzy matching (lower value = stricter match)
      includeScore: true      // Include scores in the search results to rank them
    });

    // Perform fuzzy search on the input
    const result = fuse.search(input);

    // If a match is found
    if (result.length > 0 && result[0].score < 0.3) { // A match is found with a score below the threshold
      return result[0].item.response;  // Return the response associated with the matched keywords
    }

    // If no match is found, return a default message
    return "I'm sorry, I didn't understand that. Could you try rephrasing?";
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <div className="chatbot-icon" onClick={toggleChatbot}>
          <HiChatAlt2 size={24} />
          </div>
      )}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Online Assistant</span>
            <button className="close-button" onClick={toggleChatbot}>
              ✖
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.from === 'bot' ? 'bot-message' : 'user-message'}`}
              >
                {msg.from === 'bot' && <FiUser className="assistant-icon" />}
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-message bot-message">
                <FiUser className="assistant-icon" />
                <em>Typing...</em>
              </div>
            )}
          </div>
          <div className="chatbot-input-section">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleInputKeyPress}
              placeholder="Type your message..."
              className="chatbot-input"
            />
            <button onClick={handleSend} className="chatbot-send-button">
              <FiSend />
            </button>
            <label className="icon-button">
            <input type="file" accept=".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .txt, .xlsx, .pptx" />
            <HiPaperClip size={20} />
            </label>

            <button className="icon-button">
              <FiMic />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
