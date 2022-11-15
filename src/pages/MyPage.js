import React, { useEffect, useState } from 'react'
import { Booking } from '../components/Booking'
import { NewBookingForm } from '../components/NewBookingForm'

export const MyPage = (props) => {

  const {appUser} = props

  const [bookings, setBookings] = useState([])

  const fetchBookings = async () => {
    let responce = await fetch(`${process.env.REACT_APP_BASE_URL}/bookings/get/${appUser.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${appUser.token}`
      }
    })
    let bookings = await responce.json()
    setBookings(bookings)
}
  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <>
    <h1>{appUser.appUserName}'s Page</h1>
    <div>
      <ul>
        {bookings.sort((a, b) => a.id > b.id ? 1 : -1)
        .map(booking => 
          <li key={booking.id}>
            <Booking id={booking.id} appUserName={booking.appUserName} status={booking.status} 
              date = {booking.date} time = {booking.time} accepted = {booking.accepted} appUser={appUser}
              fetchBookings={fetchBookings}/>
          </li>)}
      </ul>
      <NewBookingForm appUser={appUser}/>    

    </div>
    </>
  )
}
