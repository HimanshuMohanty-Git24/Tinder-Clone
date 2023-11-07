import React, { useState } from 'react'
import './ChatScreen.css'
import { Avatar } from '@mui/material';

function ChatScreen() {
    const[input,setInput]=useState('');
    const[messages,setMessages]=useState([
        {
            name:'Ellen',
            Image:'https://imageio.forbes.com/specials-images/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg?format=jpg&crop=878,879,x422,y0,safe&height=416&width=416&fit=bounds',
            message:'Whats up❤️?'
        },
        {
            name:'Ellen',
            Image:'https://imageio.forbes.com/specials-images/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg?format=jpg&crop=878,879,x422,y0,safe&height=416&width=416&fit=bounds',
            message:'How it going!'
        },
        {
            message:'Hi! How are you Ellen!'
        }
    ]);
    const handleSend=e=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput('');
    }
  return (
    <div className='chatScreen'>
        <p className='chatScreen__timestamp'>
            YOU MATCHED WITH ELLEN ON 10/08/23
        </p>
        {messages.map((message)=>(
            message.name ? (
                <div className='chatScreen__message'>
                <Avatar className='chatScreen__image' alt={message.name} src={message.Image}/>
                <p className='chatScreen__text'>{message.message}</p>
                </div>
            ):(
                <div className='chatScreen__message'>
                <p className='chatScreen__textUser'>{message.message}</p>
                </div>
            )
        ))}
        <form className='chatScreen__input'>
            <input value={input} onChange={e => setInput(e.target.value)} className='chatScreen__inputField' type="text" placeholder='Type a message...'/>
            <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
        </form>
    </div>
  )
}

export default ChatScreen