import React, {useEffect} from 'react';
import { useNavigate, Route } from "react-router-dom";

// function Protected({Component: Cmp, ...rest}) {
//  return(
//      <Route
//          {...rest}
//          render={(props) => {
//              localStorage.get('result') ? (
//                  <Cmp {...props} />
//              ) : <Navigate to="/login" />
//          }}
//      />
//  )
// }

function Protected(props) {
   const  {Component} = props;
   const navigate = useNavigate()

//    useEffect(()=>{
       let login = localStorage.getItem('result')
       if(!login){
           navigate('/login')
       }
//    }, [])

    return(
        <>
        <Component/>
        </>
    )
}

export default Protected;