import React from 'react'
import './ChatBot.css'

const ChatBot = ({onStartChat}) => {
  return (
    <div className='start-page'>
        <button className="start-page-btn" onClick={onStartChat}>CHAT AI</button>
      
    </div>
  )
}

export default ChatBot
