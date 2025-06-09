import React from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'

export default function SignOut() {
  return (
    <button
      onClick={() => signOut(auth)}
      className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg'>
      Çıxış et
    </button>
  )
}
