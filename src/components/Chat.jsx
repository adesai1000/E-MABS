import React from 'react'
import upload from "../img/upload.png"
import more from "../img/more.png"
import download from "../img/download.png"
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='Chat'>
      <div className="ChatInfo">
        <span>Lazy Dog.png</span>
        <div className="ChatIcons">
          <img src={upload} alt='' />
          <img src={download} alt='' />
          <img src={more} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>

  )
}
<Messages />

export default Chat
