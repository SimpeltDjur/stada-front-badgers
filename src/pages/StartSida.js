import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { MyPage } from './MyPage';

export const StartSida = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
    {loggedInUser 
      ?
        <div>
          <MyPage appUser={loggedInUser} />
        </div>
      :
        <div>
          <LoginForm setLoggedInUser={setLoggedInUser}/>
          <Link to="/newuser">Skapa nytt konto</Link>

        </div>
    }
    
    
    </>
  )
}
