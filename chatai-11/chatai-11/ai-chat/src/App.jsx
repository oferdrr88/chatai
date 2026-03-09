import React from 'react'
import ChatBoth from './components/ChatBot.jsx'
import ChatBothApp from './components/ChatBoxApp.jsx'  
import { useState } from 'react'

const App = () => {

const [isChating, setIsChating] = useState(false)
const [chats, setChats]= useState([])

const [activeChat, setActiveChat] = useState(null)

// ************************** Handle Start Chat Function **************************
const handleStartChat = () => {
  setIsChating(true)

  if(chats.length === 0){
    const newChats = {

      id: `chat-${new Date().toLocaleDateString("en-gb")}
       ${new Date().toLocaleTimeString()}`,
      message:[]
    }
    setChats([newChats])
  }
}

// ************************** Handle Go Back Function **************************
const handeleGoBack = () => {
  setIsChating(false)
}

const crateNewChat = () => {
  const newChats = {

      id: `chat-${new Date().toLocaleDateString("en-gb")}
       ${new Date().toLocaleTimeString()}`,
      message:[],
    }


    const updateChat = [newChats, ...chats]
           setChats(updateChat)
           setActiveChat(newChats.id)
}


  return (
    <div className='container'>

{/*                            Ischating                         */}
      {isChating ? <ChatBothApp 
       onBack={handeleGoBack} 
       chat={chats} 
       setChats={setChats} 
       activeChat={activeChat}
       setActiveChat={setActiveChat}
        crateNewChat={crateNewChat}
          onNewChat={crateNewChat}
       /> :
       <ChatBoth onStartChat={handleStartChat} />}
      {/* <ChatBoth />
      <ChatBothApp /> */}
    </div>
  )
}

export default App

App