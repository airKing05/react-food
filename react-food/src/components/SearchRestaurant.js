import React, {useState, useCallback} from 'react';
import { InputGroup, FormControl, Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Menu from './Menu';
import { UilEdit, UilTrashAlt, UilEnvelopeUpload, UilLocationPinAlt, UilRestaurant, UilListOl, UilFavorite, UilPen } from '@iconscout/react-unicons'

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


  //implement debouncing on search  
  const debounce = function(cb){
    let timer;
    return function(...arg){
      if(timer){ 
        // if user type krte krte ruk jata hai or 500ms me wapis type suru kr ete haia 
        // to optimizedSearch ko call nahi krna hai timer ko zero krna hai
        clearTimeout(timer);
      }
      // const context = this;
      timer = setTimeout(() => {
      timer = null; // can be removed
      // cb.apply(context, arg) // when use main function (debounce) as arrow function
      cb(arg)
      }, 500);
    }
  };
 //useCallback provide us memoized callback function
  const optimizeSearch = useCallback(debounce(getSearchInput), [])
  

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
          onChange={(e) => optimizeSearch(e.target.value)}
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
                <th><UilListOl /> &nbsp;Sr. No.</th>
                <th><UilRestaurant />&nbsp; Restaurant</th>
                <th><UilLocationPinAlt />&nbsp; Address</th>
                <th><UilEnvelopeUpload />&nbsp; Email</th>
                <th><UilFavorite />&nbsp; Rating</th>
                <th><UilPen />&nbsp; Update Restaurant</th>
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
                  <td className='d-flex justify-content-around'>
                    <NavLink to={'/update-list/' + item.id}
                      style={{ color: 'green' }}
                      className="text-decoration-none"
                    ><UilEdit /></NavLink>
                    <button
                      style={{ border: 'none', background: 'none', color: 'red' }}
                      onClick={() => deleteRestaurant(item.id)}><UilTrashAlt /></button>
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