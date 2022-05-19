import React, { useState } from 'react'

export default function AccordionRestaurantData(props) {
  const [show, setShow] = useState(false);
  const { name, address, email, rating } = props;
  return (
    <div className='mb-3 container'>
      <div className='row bg-info bg-opacity-50  rounded'>
        <h5 
        
          className='col-10 py-2 rounded d-flex text text-capitalize' 
        style={{ paddingLeft: '15px !important' }}

        >{name}</h5>
        <span
          className='col-2 pt-1'
          role="button"
          onClick={() => setShow(!show)}
        >
          <span className='fs-3 bg-white px-2 py-1 rounded-circle'>
            {show ? "-" : "+"} </span>
        </span>
      </div>
      {
        show && <div className='row bg-info bg-opacity-25 py-2 mt-1 rounded'>
          <p className='text-capitalize'>{address}</p>
          <p>{rating}</p>
          <p>{email}</p>
        </div>
      }

    </div>
  )
}
