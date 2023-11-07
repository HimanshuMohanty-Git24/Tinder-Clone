import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
  return (
    <div className='chats'>
        <Chat
            name='Lisa'
            message='Yo whats up!'
            timestamp='40 seconds ago'
            profilePic='https://staticg.sportskeeda.com/editor/2021/10/8cd36-16334407189532-800.jpg'
        />
        <Chat
            name="Ellen"
            message="Whats up❤️?"
            timestamp="55 minutes ago"
            profilePic="https://imageio.forbes.com/specials-images/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg?format=jpg&crop=878,879,x422,y0,safe&height=416&width=416&fit=bounds"
        />
        <Chat
            name="Sandra"
            message="Ola!"
            timestamp="3 days ago"
            profilePic="https://hips.hearstapps.com/hmg-prod/images/sandra-dee-gettyimages-154051093.jpg?crop=1xw:1.0xh;center,top&resize=640:*"
        />
        <Chat
            name="Natasha"
            message="Oops there is he is...🐶"
            timestamp="1 week ago"
            profilePic="https://m.media-amazon.com/images/M/MV5BMzc5ZjkxYjEtODUyYS00YTA2LTk4MTItOGQyYThlMWM4ZDQ1XkEyXkFqcGdeQXVyMTE5NjI0MzYz._V1_.jpg"
        />
    </div>
  )
}

export default Chats