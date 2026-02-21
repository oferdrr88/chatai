import React from 'react'
import './ChatBotApp.css'


const ChatBoxApp = () => {
  return (
    <div className='chat-app'>
      ChatBoxApp
      <div className="chat-list">
        <div className="chat-list-hader">
            <h2>Chat List</h2>
          <i class="bx bx-pencil" />
            
        </div>
        <div className="chat-list-item active">
            <h4>chat 20/07/2026 12:59:42 PM</h4>
             <i className="bx bx-x-circle" />
        </div>

        <div className="chat-list-item">
            <h4>chat 20/07/2026 12:59:42 PM</h4>
             <i className="bx bx-x-circle" />
        </div>

        <div className="chat-list-item">
            <h4>chat 20/07/2026 12:59:42 PM</h4>
             <i className="bx bx-x-circle" />
        </div>
      </div>
      <div className="chat-windows">
        <div className="chat-title">
            
            <h3>Chat Window with AI</h3>
           
            <i class="bx bx-arrow-from-right-stroke arrow" />
        </div>
        <div className="chatName">
            <div className="prompt">Hi are how you 
                <span>12:59:45 PM</span>
            </div>

             <div className="chatName">
            <div className="prompt">Response</div>
                <span>12:59:45 PM</span>
            </div>

            <div className="typing">Typing...</div>
            <form className='msg-form'>
                <i className="fa-solid fa-face smile emoji"
                placeholder='Type a masge'>

                </i>
                <input type="text" className='msg-input' />

            </form>
        </div>
      </div>
    </div>
  )
}

export default ChatBoxApp
