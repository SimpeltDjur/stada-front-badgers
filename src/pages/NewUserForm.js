import React, { useState } from 'react'

export const NewUserForm = () => {
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    let responce = await fetch(`${process.env.REACT_APP_BASE_URL}/user/new`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        appUserName: newUserName,
        password: newPassword,
        address: newAddress
      })
    }) 
  }

  return (
    <>
    <h2>Ny användare</h2>
    <form>
      <p>Username</p>
      <input
        type="text"
        placeholder='Username...'
        onChange={(e) => setNewUserName(e.target.value)}
        value={newUserName}>
      </input>
      <p>Password</p>
      <input
        type="text"
        placeholder='Password...'
        onChange={(e) => setNewPassword(e.target.value)}
        value={newPassword}>
      </input>
      <p>Adress</p>
      <input
        type="text"
        placeholder='Adress...'
        onChange={(e) => setNewAddress(e.target.value)}
        value={newAddress}>
      </input>
    </form>
    <br/><br/>
    <button onClick={handleRegistration}>Registrera</button>
    </>
  )
}
