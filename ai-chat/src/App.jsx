import React from 'react'
import ChatBoth from './components/ChatBot.jsx'
import ChatBothApp from './components/ChatBoxApp.jsx'  
import { useState } from 'react'

const App = () => {

const [isChating, setIsChating] = useState(false)
const [chats, setChats]= useState([])


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

  return (
    <div className='container'>

{/*                            Ischating                         */}
      {isChating ? <ChatBothApp  onBack={handeleGoBack} chat={chats} setChats={setChats} /> :
       <ChatBoth onStartChat={handleStartChat} />}
      {/* <ChatBoth />
      <ChatBothApp /> */}
    </div>
  )
}

export default App

App