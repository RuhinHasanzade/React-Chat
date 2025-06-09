import React, { useEffect, useRef } from 'react'
import { collection, query, orderBy } from "firebase/firestore"
import { useCollection } from "react-firebase-hooks/firestore"
import { db, auth } from '../firebase'
import MessageItem from './MessageItem'

export default function MessageList() {
  const messagesRef = collection(db, 'messages')
  const [messages] = useCollection(query(messagesRef, orderBy("createdAt")))

  const listEndRef = useRef()

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages?.docs])

  return (
    <div className='flex-grow overflow-y-auto px-4 py-2 space-y-4'>
      {messages?.docs.map(doc => (
        <MessageItem key={doc.id} data={doc.data()} />
      ))}
      <div ref={listEndRef}></div>
    </div>
  )
}
