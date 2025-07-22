import React from 'react'
import { SignIn } from '@clerk/clerk-react'
function SignInPage() {
  return (
    <SignIn path='/signin' signUpUrl='/signup'/>
  )
}

export default SignInPage