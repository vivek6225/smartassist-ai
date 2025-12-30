import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import Message from './Message';

const ChatBox = () => {
  const { selectedChat } = useAppContext();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState('');
  const [mode, setMode] = useState('text');
  const [isPublished, setIsPublished] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    if (selectedChat && Array.isArray(selectedChat.messages)) {
      setMessages(selectedChat.messages);
    } else {
      setMessages([]);
    }
  }, [selectedChat]);

  return (
    <div className='flex-1 flex flex-col m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40 h-[90vh]'>

      <div className='flex-1 overflow-y-auto scrollbar-hide'>

        {messages.length === 0 ? (
          <div className='h-full flex flex-col items-center justify-center'>
            <div className='flex items-center gap-4 mb-8'>
              <img src={assets.logo} alt="Logo" className='w-12 h-12' />
              <div className='text-left'>
                <h2 className='text-3xl font-bold text-gray-900 dark:text-white leading-none'>SmartAssist</h2>
                <p className='text-[15px] font-bold text-violet-600 mt-1'> Smart AI Assistant</p>
              </div>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-400 dark:text-white'>Ask me anything.</h1>
          </div>
        ) : (
          <div className='flex flex-col items-start w-full pt-10'>
            {messages.map((msg, index) =>
              <Message key={index} message={msg} />
            )}

            {loading && (
              <div className='loader flex items-center gap-1'>
                <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce'></div>
                <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce'></div>
                <div className='w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-white animate-bounce'></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* prompt Input message */}
      <form onSubmit={onSubmit} className='bg-primary/20 dark:bg-[#583C79]/30 border border-primary dark:border-[#80609F]/30 rounded-full w-full max-w-2xl p-3 pl-4 mx-auto flex gap-4 items-center'>
        <select onChange={(e) => setMode(e.target.value)} value={mode} className='text-sm pl-3 pr-2 outline-none'>
          <option className='dark:bg-purple-900' value="text">Text</option>
          <option className='dark:bg-purple-900' value="image">Image</option>
        </select>

        <input
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
          type="text"
          placeholder='Type your prompt here..'
          className='flex-1 w-full text-sm outline-none'
          required
        />

        <button disabled={loading}>
          <img src={loading ? assets.stop_icon : assets.send_icon} className='w-8 cursor-pointer' alt="" />
        </button>
      </form>

    </div>
  )
}

export default ChatBox
