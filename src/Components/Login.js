import React from 'react'
import { signInWithGoogle } from './FirebaseConfig';

function Login() {

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={signInWithGoogle}
        className="bg-blue-500 text-white p-3 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default Login;