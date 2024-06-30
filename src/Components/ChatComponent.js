import React from 'react'

function ChatComponent({ item, index, user }) {
  return (

    <div key={index} className="flex-1 p-4 space-y-4">
        <div className="flex justify-start">
            <div className="max-w-xs px-4 py-2 bg-green-100 text-gray-900 rounded-lg shadow flex items-center space-x-4">
                <img src={user.photoURL} className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full" alt={user.displayName}/>
                <div>
                    <p>{item.caption}</p>
                    <span className="text-xs text-gray-500">{item.time}</span>
                </div>
            </div>
        </div>
        {/*<div class="flex justify-end">
            <div class="max-w-xs px-4 py-2 bg-blue-100 text-gray-900 rounded-lg shadow">
                <p>I'm good, thanks! How about you?</p>
                <span class="text-xs text-gray-500">12:46 PM</span>
            </div>
        </div>*/}

    </div>
  )
}

export default ChatComponent