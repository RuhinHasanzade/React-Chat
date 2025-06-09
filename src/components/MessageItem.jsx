import React from 'react'
import { auth } from '../firebase'

export default function MessageItem({ data }) {
  const { text, userPhoto, userUid } = data
  const isCurrentUser = auth.currentUser?.uid === userUid

  return (
    <div className={`flex items-end ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
      {!isCurrentUser && (
        <img src={userPhoto} alt="User" className='w-10 h-10 rounded-full mr-2' />
      )}
      <div className={`p-3 max-w-xs rounded-2xl text-sm ${isCurrentUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-700 text-white rounded-bl-none'}`}>
        {text}
      </div>
      {isCurrentUser && (
        <img src={userPhoto} alt="User" className='w-10 h-10 rounded-full ml-2' />
      )}
    </div>
  )
}
