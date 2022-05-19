import React, {useState} from 'react';
import { InputGroup, FormControl, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Menu from './Menu';

function SearchRestaurant() {
  const [search, setSearch] = useState("");
  const [lastSearch, setLastSearch] = useState(null);
  const [noData, setNoData] = useState(false)

  // get input data from the input search field
  function getSearchInput(key){
     console.log(key);
     setLastSearch(key)
    fetch(`http://localhost:3001/restaurant?q=${key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if(result.length>0){
          setSearch(result)
          setNoData(false)
        }else{
          setNoData(true)
          setSearch(null)
        }
      })
    
  };

  

  // delete restaurant

  function deleteRestaurant(id) {
    // console.log(id)
    alert(id)
    fetch(`http://localhost:3001/restaurant/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
      .then(result => {
        // console.log(result)
        alert(`${id}'s Restaurant has been deleted`)
         getSearchInput(lastSearch);
      })

  }

  return (
    <div>
      <Menu/>
    <div className='container mt-5 text-center '>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Restaurant | Address | Rating"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => getSearchInput(e.target.value)}
        />
        {/* <Button 
        variant="outline-secondary" 
        id="button-addon2"
        onClick={getSearchRestaurant}>
          Search
        </Button> */}
      </InputGroup>
        {/* get restaurant list  */}
        {
          search ? <Table striped bordered hover >
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
              {search && search.map((item, index) =>
                <tr key={index}>
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
          </Table> : " "

        }

        {/* if no data found on the server */}
        {
          noData ? <h4>no data founded in server</h4> : null
        }
    </div>     
    </div>
  )
}

export default SearchRestaurant;