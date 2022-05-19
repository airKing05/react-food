import React from 'react'
import RestaurantCarousal from './carousal.js'
import Menu from './Menu.js'

export default function Home() {
  return (
    <>
    <Menu/>
    <div className='container'>
      <h3>Can enjoy your favorite Restaurant</h3>
      <RestaurantCarousal/>
      </div>
    </>
  )
}

