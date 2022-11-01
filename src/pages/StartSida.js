import React from 'react'
import { useState } from 'react'
import { LoginForm } from './LoginForm';

export const StartSida = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
    {loggedInUser 
      ?
        <div>
          <h1>{loggedInUser.appUserName}'s Page</h1>
        </div>
      :
        <div>
          <LoginForm setLoggedInUser={setLoggedInUser}/>
        </div>
    }
    
    
    </>
  )
}
