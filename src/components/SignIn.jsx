import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from '../firebase'

export default function SignIn() {
  function handleClick() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  return (
    <div className='flex justify-center items-center h-full'>
      <button
        onClick={handleClick}
        className='bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-lg font-semibold shadow-md'>
        Google ilə davam et
      </button>
    </div>
  )
}
