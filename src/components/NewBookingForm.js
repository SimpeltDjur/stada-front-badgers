import React, { useState } from 'react'

export const NewBookingForm = (props) => {

  const {appUser, fetchBookings} = props

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [message, setMessage] = useState("")

  const handleBooking = async (event) => {
    event.preventDefault()

    let responce = await fetch(`${process.env.REACT_APP_BASE_URL}/bookings/newbooking`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${appUser.token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        appuserId: appUser.id,
        time: time,
        date: date,
        message: message
      })
    })
    fetchBookings()
  }


  return (
    <>
      <form>
        <p>Datum</p>
        <input
          type="text"
          placeholder='åååå/mm/dd'
          onChange={(e) => setDate(e.target.value)}
          value={date}>
        </input>
        <br />
        <p>Tid</p>
        <input
          type="text"
          placeholder='tt:mm'
          onChange={(e) => setTime(e.target.value)}
          value={time}>
        </input>
        <br />
        <p>Meddelande</p>
        <textarea
          placeholder='Lämna meddelande till din städare...'
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        >  
        </textarea>
      </form>
      <button onClick={handleBooking} >Boka städning</button>
    
    
    
    
    
    
    </>
  )
}
