import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

export default function ProductList() {
    const [restaurant, setRestaurent] = useState([]);

    function getRestaurant() {
        fetch('http://localhost:3001/restaurant')
            .then(res => res.json())
            .then(result => {
                // console.table(result)
                setRestaurent(result)
            })
    };
    useEffect(() => {
        getRestaurant();
    }, [])

    function deleteRestaurant(id) {
        // console.log(id)
        alert(id)
        fetch(`http://localhost:3001/restaurant/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(result => {
                // console.log(result)
                alert(`${id}'s Restaurant has been deleted`)
                getRestaurant();
            })

    }


    return (
        <div>
            <Menu />
            <div className='container mt-5 text-center table-responsive'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Restaurant</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Update Restaurant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurant && restaurant.map((item, index) =>
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td className="text-capitalize">{item.name}</td>
                                <td className="text-capitalize">{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.rating}</td>
                                <td>
                                    <NavLink to={'/update-list/' + item.id}
                                        style={{ color: 'green' }}
                                        className="text-decoration-none"
                                    >Edit</NavLink>
                                    <button
                                        style={{ border: 'none', background: 'none', color: 'red' }}
                                        onClick={() => deleteRestaurant(item.id)}>Remove</button>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
