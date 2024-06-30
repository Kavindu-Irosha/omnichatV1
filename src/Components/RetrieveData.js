import React, { useState, useEffect } from 'react'
import { RlDB } from './FirebaseConfig';
import { ref, onValue } from 'firebase/database';
import ChatComponent from './ChatComponent';

function RetrieveData({user}) {

    const [chats, setChats] = useState([]);
    //const [UserName, setUserName] = useState('')

    const handleDatarecieve = () => {
      
        const UserChats = ref(RlDB, `/UsersContent(${user.displayName})`);
        onValue(UserChats, (snapshot) => {
          const data = snapshot.val();

          if(data) {
            const NewChat = Object.keys(data).map(key => ({
              id: key,
              ...data[key]
            }))
            console.log(NewChat)
            setChats(NewChat)
          }
        })
      
    }

    useEffect(() => {
     handleDatarecieve()
    },)

  return (
    <div className='flex flex-col m-6'>
      {
       chats.map((item, index) => {
              return (
                <ChatComponent user={user} index={index} item={item} />
              )
        }) 
      },
      
    </div>
  )
}

export default RetrieveData