import React, { useState } from 'react'
import './ChatBotApp.css'


const ChatBoxApp = ({onBack, chat, setChats}) => {
const [inputValue, setInputValue] = useState('')
const[masseges, setMasseges] = useState(chat[0]?.message || [])


const handleInputChange = (e) => {
    setInputValue(e.target.value)
}

const sendMassege = () => {
    if(inputValue.trim() === '') return

    const newMessage = {
        type: 'prompt',
        text: inputValue,
        timestamp: new Date().toLocaleDateString("en-gb") 
        
    }

    const updatedMessages = [...masseges, newMessage]
    setMasseges(updatedMessages)
    setInputValue('')

    const updateChats = chat.map((chat, index)=>{
        if(index === 0){
            return {...chat, message: updatedMessages}
        }
        return chat
    })

    setChats(updateChats)
     

    // Update the chat with the new messages
    const updatedChat = chat.map(c => 
      c.id === chat[0]?.id ? {...c, message: updatedMessages} : c
    )
    setChats(updatedChat)
}


  return (
    <div className='chat-app'>
      ChatBoxApp
      <div className="chat-list">
        <div className="chat-list-hader">
            <h2>Chat List</h2>
          <i class="bx bx-pencil" />
            
        </div>
        
        {chat.map((chatItem, index) => (
            <div key={index} className={`chat-list-item ${index === 0 ? 'active' : ''}`}>
                <h4>{chatItem.id}</h4>
                <i className="bx bx-x-circle" />
            </div>
        ))}
        
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
           
           {/*           onBack chatApp                     */}
            <i class="bx bx-arrow-from-right-stroke arrow" onClick={onBack} />
        </div>
        <div className="chat">
            <div className="prompt">Hi are how you 
                <span>12:59:45 PM</span>
            </div>

             <div className="response">
                gfjfgj fjfjf fjfjf jfjfj jfjfj rssy twtw wtwttwt jfj
                <span>12:59:45 PM</span>
            
            </div>

            <div className="typing">Typing...</div>
            <form className='msg-form'>
               
                <i className="bx bx-wink-tongue smile emoji" />
                <input type="text" className='msg-input' 
                 placeholder='Type a message'></input>
                
            </form>
                

        </div>
      </div>
    </div>
  )
}

export default ChatBoxApp
