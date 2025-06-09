import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase'

import SignIn from './components/SignIn'
import SignOut from './components/SignOut'
import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className='bg-gray-900 text-white h-screen flex flex-col'>
      <header className='bg-gray-800 p-4 shadow-lg flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>💬 LiveTalk – by Ruhin</h1>
        {user && <SignOut />}
      </header>

      <main className='flex-grow flex flex-col overflow-hidden'>
        {user ? (
          <>
            <MessageList />
            <MessageForm />
          </>
        ) : (
          <SignIn />
        )}
      </main>
    </div>
  )
}

export default App
