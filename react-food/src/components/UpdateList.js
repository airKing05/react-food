import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Menu from './Menu';

let restaurantData = {
    name: "",
    address: "",
    email: "",
    rating: "",
    id: "",
};

export default function UpdateList() {
    //  console.log(match.params.name) older way props me {match}
    // creating state for the input fields
    const [restaurant, setRestaurent] = useState(restaurantData);
    console.log(restaurant.id)
    let { id } = useParams();
    // {id, name or bhi aa skte hai }
    // new way
    console.log(id)



    // fetch old data needed to update
    function oldData(props) {
        alert(id)
        fetch('http://localhost:3001/restaurant/' + id)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setRestaurent(result)
            })
    }

    useEffect(() => {
        oldData()
    }, [])


    // handling the input value 
    let value, name
    function getChanges(e) {
        //console.log(e)
        name = e.target.name;  // targeting all fields to same functionality
        value = e.target.value;
        setRestaurent({ ...restaurant, [name]: value })
    };




    // submit form data to server
    function editRestaurantDetails(e) {
        e.preventDefault();
        fetch(`http://localhost:3001/restaurant/${id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(restaurant)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert("Restaurant data edit successfully")
            })
    }
    return (
        <>
        <Menu/>
        <div className='container' style={{ maxWidth: '500px' }}>
            <Form onSubmit={editRestaurantDetails}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='d-flex'>Restaurant Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Restaurant Name"
                        name="name"
                        value={restaurant.name}
                        onChange={getChanges} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='d-flex'> Restaurant email</Form.Label>
                    <Form.Control type="email" placeholder="Enter restaurant email"
                        name="email"
                        value={restaurant.email}
                        onChange={getChanges} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label className='d-flex'>Restaurant Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter restaurant Address"
                        name="address"
                        value={restaurant.address}
                        onChange={getChanges} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRatting">
                    <Form.Label className='d-flex'>Restaurant Ratting</Form.Label>
                    <Form.Control type="text" placeholder="Enter restaurant ratting"
                        name="rating"
                        value={restaurant.rating}
                        onChange={getChanges} />
                </Form.Group>

                <Button variant="primary" type="submit" className='d-flex'>
                    Add Restaurant
                </Button>
            </Form>
        </div>
        </>
    )
}
