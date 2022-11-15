import React from 'react'

export const BookingCleaner = (props) => {

  const {id, appUserName, status, date, time, appUser, fetchBookings} = props

  const handleConfirmation = async (id) => {
    await fetch(`${process.env.REACT_APP_BASE_URL}/bookings/claim/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${appUser.token}`
      }
    })
    fetchBookings()
  }


  return (
    <>
      <h1>Städing #{id}</h1>
      <p>Bokad av: {appUserName}</p>
      <p>Datum: {date} </p>
      <p>Klockan: {time} </p>
      <p>Status: {status}</p>
      <button onClick={() => handleConfirmation(id)} >Bekräfta</button>
    </>
  )
}
