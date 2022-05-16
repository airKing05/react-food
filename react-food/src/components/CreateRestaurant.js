import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";

let restaurantData={
    name: "abcd",
    address: "jhdsbf",
    email: "@gmail",
    ratting: "4.3",
    id: "2",

}

function CreateRestaurant() {

    // creating state for the input fields
    const [restaurant, setRestaurent] = useState(restaurantData);
    
    // handling the input value 
    let value, name
    function getChanges(e) {
        //console.log(e)
        name = e.target.name;  // targeting all fields to same functionality
        value = e.target.value;
        setRestaurent({...restaurant, [name]: value})
    };

    // submit form data to server
    function addRestaurantDetails(e){
        e.preventDefault();
        fetch('http://localhost:3001/restaurant', {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(restaurant)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    }
  return (
    <div className='container' style={{maxWidth: '500px'}}>
          <Form onSubmit={addRestaurantDetails}>
              <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label className='d-flex'>Restaurant Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Restaurant Name"
                  name = "name"
                  value={restaurant.name} 
                  onChange={getChanges} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className='d-flex'> Restaurant email</Form.Label>
                  <Form.Control type="email" placeholder="Enter restaurant email" 
                      name="email"
                      value={restaurant.email}
                      onChange={getChanges}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label className='d-flex'>Restaurant Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter restaurant Address" 
                      name="address"
                      value={restaurant.address}
                      onChange={getChanges}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicRatting">
                  <Form.Label className='d-flex'>Restaurant Ratting</Form.Label>
                  <Form.Control type="text" placeholder="Enter restaurant ratting" 
                      name="ratting"
                      value={restaurant.ratting}
                      onChange={getChanges}/>
              </Form.Group>
            
              <Button variant="primary" type="submit" className='d-flex'>
                  Add Restaurant
              </Button>
          </Form>
    </div>
  )
}

export default CreateRestaurant