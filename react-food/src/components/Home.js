import React from 'react'
import Accordion from './accordion/index.js'
import RestaurantCarousal from './carousal.js'
import Menu from './Menu.js'

export default function Home() {
  return (
    <>
    <Menu/>
    <div className='container text-center' >
      <h3>Can enjoy your favorite Restaurant</h3>
      <RestaurantCarousal/>
      <Accordion/>
      </div>
    </>
  )
}

