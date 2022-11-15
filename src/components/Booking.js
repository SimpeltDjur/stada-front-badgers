import React, { useState } from 'react'

export const Booking = (props) => {

  const {id, appUserName, status, date, time, appUser, fetchBookings} = props

  

  const handleApproval = async (id) => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/bookings/approve/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${appUser.token}`
      }
    })
    fetchBookings()
  }



  const handleCancellation = async (id) => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/bookings/cancel/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${appUser.token}`
      }
    })
    fetchBookings()
  }





  return (
    <>
    <h1>Städing #{id}</h1>
    <p>Datum: {date} </p>
    <p>Klockan: {time} </p>
    <p>Status: {status}</p>
    


    {
      status == "Utförd"
      ?
      <button onClick={() => handleApproval(id)}>Godkänn städning</button>
      :
      <></>
    }

    {
      status == "Avbokad" ||
      status == "Godkänd" ||
      status == "Utförd"
      ?
      <></>
      :
     <button onClick={() => handleCancellation(id)}>Avboka</button>
    }
    
    </>
  )
}
