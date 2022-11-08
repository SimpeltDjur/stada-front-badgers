import React, { useState } from 'react'

export const LoginForm = (props) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const {setLoggedInUser} = props

  const handleLogin = async (event) => {
    event.preventDefault();

    let responce = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify({
        appUserName: username,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let token = await responce.text();

    responce = await fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/whoami?token=${token}`)
    let user = await responce.json();
    setLoggedInUser(user); //note to selfs, vid felaktigt inollg sätts felmedelandet som en user, det kanske inte är idealt...
    console.log(user);

  }



  return (
    <>
      <h2>Login</h2>
      <form>
      <p>Username</p>
      <input 
        type="text"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      /> 
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </form>
    </>
  )
}
