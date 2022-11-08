import React, { useEffect, useState } from 'react'
import { Booking } from '../components/Booking'

export const MyPage = (props) => {

  const {appUser} = props

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    const fetchBookings = async () => {
        let responce = await fetch(`${process.env.REACT_APP_BASE_URL}/bookings/get/${"1"}`, { // OBS HÅRDKODAD
          method: 'GET',
          headers: {
            Authorization: `Bearer ${appUser.token}`
          }
        })
        let bookings = await responce.json()
        setBookings(bookings)
    }
    fetchBookings()
  }, [])

  return (
    <>
    <h1>{appUser.appUserName}'s Page</h1>
    <div>
      <ul>
        {bookings.map(booking => <li><Booking id={booking.id} appUserName={booking.appUserName} status={booking.status}date = {booking.date}time = {booking.time}accepted = {booking.accepted}/></li>)}
      </ul>
    </div>
    </>
  )
}
