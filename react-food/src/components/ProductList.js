import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import { UilEdit, UilTrashAlt, UilEnvelopeUpload, UilLocationPinAlt, UilRestaurant, UilListOl, UilFavorite, UilPen } from '@iconscout/react-unicons'

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
                            <th><UilListOl/> &nbsp;Sr. No.</th>
                            <th><UilRestaurant />&nbsp; Restaurant</th>
                            <th><UilLocationPinAlt />&nbsp; Address</th>
                            <th><UilEnvelopeUpload />&nbsp; Email</th>
                            <th><UilFavorite />&nbsp; Rating</th>
                            <th><UilPen />&nbsp; Update Restaurant</th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurant && restaurant.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td className="text-capitalize">{item.name}</td>
                                <td className="text-capitalize">{item.address}</td>
                                <td>{item.email}</td>
                                <td>{item.rating}</td>
                                <td className='d-flex justify-content-around'>
                                    <NavLink to={'/update-list/' + item.id}
                                        style={{ color: 'green' }}
                                        className="text-decoration-none"
                                    ><UilEdit/></NavLink>
                                    <button
                                        style={{ border: 'none', background: 'none', color: 'red' }}
                                        onClick={() => deleteRestaurant(item.id)}><UilTrashAlt/></button>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
