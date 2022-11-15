import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { MyPageCleaner } from './MyPageCleaner';
import { LoginForm } from './LoginForm';
import { MyPage } from './MyPage';

export const StartSida = () => {

  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
    {loggedInUser 
      ?
        loggedInUser.isCleaner 
        ?
          <MyPageCleaner appUser={loggedInUser}/>
        :
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
