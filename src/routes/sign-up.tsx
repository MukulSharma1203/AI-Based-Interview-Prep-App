import { SignUp } from '@clerk/clerk-react'
import React from 'react'

function SignUpPage() {
  return (
    <SignUp path='/signup' signInUrl='/signin'/>
  )
}

export default SignUpPage