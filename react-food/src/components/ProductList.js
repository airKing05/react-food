import React, {useEffect, useState} from 'react';
import { Table } from "react-bootstrap";

export default function ProductList() {
    const [restaurant, setRestaurent] = useState([]);

    function getRestaurant(){
        fetch('http://localhost:3001/restaurant')
        .then(res => res.json())
        .then(result => {
            console.table(result)
            setRestaurent(result)
        } )
    };
    useEffect(()=>{
        getRestaurant();
    }, [])
   

  return (
    <div>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Sr. No.</th>
                      <th>Restaurant</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Rating</th>
                  </tr>
              </thead>
              <tbody>
                  {restaurant && restaurant.map((item, index) =>
                  <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.email}</td>
                      <td>{item.rating}</td>
                  </tr> )}
              </tbody>
          </Table>
       
    </div>
  )
}
