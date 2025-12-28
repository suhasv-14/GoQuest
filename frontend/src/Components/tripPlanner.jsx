import React, { useState, useEffect } from 'react';
import { Moon, Sun, Send, User, Users } from 'lucide-react';
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export default function TripPlanner() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode set as default
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    axios.get(`${API_URL}/test`)
      .then(response => setBackendStatus(response.data.message))
      .catch(error => setBackendStatus('Error connecting to backend'));
  }, []);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API_URL}/api/chat`, { input: chatInput });
      setChatResponse(response.data.response);
    } catch (error) {
      console.error('Error details:', error);
      setError(error.response?.data?.error || 'An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }

    setChatInput('');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold flex items-center">
            <span className="mr-2">🌍</span>
            <span>Go Quest</span>
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button className="flex items-center space-x-1" aria-label="Community">
            <Users className="w-6 h-6" />
            <span>Community</span>
          </button>
          <button className="flex items-center space-x-1" aria-label="Sign In">
            <User className="w-6 h-6" />
            <span>Sign In</span>
          </button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Your Next Journey, Optimized 🚀</h1>
        <p className="text-lg sm:text-xl mb-8">
          Build, personalize, and optimize your itineraries with our free AI trip planner.
        </p>
        <p>Backend status: {backendStatus}</p>
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Trip Planner AI Chat is now available 🎉</h2>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          <form onSubmit={handleChatSubmit} className="flex items-center">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask anything..."
              className={`flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                isDarkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white text-black placeholder-gray-500'
              }`}
              aria-label="Chat input"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-4 py-3 bg-teal-500 text-white rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              aria-label="Send message"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : <Send className="w-5 h-5" />}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 border rounded-md bg-red-100 text-red-700">
              <p>{error}</p>
            </div>
          )}

          {chatResponse && (
            <div className="mt-4 p-4 border rounded-md 
              ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}">
              <pre className="whitespace-pre-wrap">
                {chatResponse.replace(/\*/g, '')} {/* Removes any asterisks from the response */}
              </pre>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-2">
            We'd love to hear your suggestions for improvement. Click to share any feedback.
          </p>
        </div>
      </main>
    </div>
  );
}
