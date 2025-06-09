import React, { useState } from 'react'
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db, auth } from '../firebase'

export default function MessageForm() {
  const messagesRef = collection(db, 'messages')
  const [inputText, setInputText] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputText.trim()) return

    await setDoc(doc(messagesRef), {
      text: inputText,
      createdAt: serverTimestamp(),
      userUid: auth.currentUser.uid,
      userPhoto: auth.currentUser.photoURL
    })

    setInputText("")
  }

  return (
    <form onSubmit={handleSubmit} className='p-4 bg-gray-800 flex items-center gap-2'>
      <input
        type='text'
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        placeholder='Mesaj yaz...'
        className='flex-grow px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none'
      />
      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-white font-semibold'>
        Göndər
      </button>
    </form>
  )
}
