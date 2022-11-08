import React from 'react'

export const Booking = (props) => {

  const {id, appUserName, status, date, time, accepted} = props

  return (
    <>
    <h1>Städing #{id}</h1>
    <p>Bokad av: {appUserName}</p>
    <p>Datum: {date} </p>
    <p>Klockan: {time} </p>
    <p>Status: {status}</p>
    </>
  )
}
