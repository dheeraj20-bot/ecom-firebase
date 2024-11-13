'use client'

import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../lib/firebase'
import { Button } from '@nextui-org/react'

export default function SignInWithGoogle() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true)
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      toast.success('Successfully signed in with Google')
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        toast.error('Sign-in cancelled. Please try again.')
      } else {
        toast.error('Failed to sign in. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleLogin}
      disabled={isLoading}
      className="flex items-center justify-center w-full"
    >
      {isLoading ? (
        <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin" />
      ) : (
        <>
          <img src="/google.png" className="w-5 h-5 mr-2" alt="Google logo" />
          <span className="font-semibold">Sign In with Google</span>
        </>
      )}
    </Button>
  )
}