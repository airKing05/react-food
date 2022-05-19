import React, {useState, useEffect} from 'react';
import AccordionRestaurantData from './AccordionRestaurantData';

function Accordion() {
   const  [restaurant, setRestaurant] = useState([]);
   function getDataFromApi(){
       fetch('http://localhost:3001/restaurant')
       .then(res => res.json())
       .then(result =>{
          // console.log(result);
           setRestaurant(result)
       })
   };

   useEffect(()=>{
    getDataFromApi()   
   }, []);

  return (
    <div className='container mt-5'>
     <h4>See list of Restaurant in Accordion from</h4>
     <section className='container bg-light' style={{maxWidth: '500px'}}>
      {
          restaurant && restaurant.map((currEle) => {
              const {id} = currEle;
              return <AccordionRestaurantData  key={id} {...currEle}/>
          })
      }
     </section>
    </div>
  )
}

export default Accordion;