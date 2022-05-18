import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {useNavigate}  from "react-router-dom";


const Login = () => {
    const [loginData, setLoginData] = useState({
        name: "",
        password: ""
    });
    
    
    const navigate = useNavigate();



    // get from data
    let name;
    let value;
    function getFormData(event) {
        name = event.target.name;
        value = event.target.value;
        setLoginData({ ...loginData, [name]: value })
        //console.log(name, value)
    }


    // get user data
    function getUserData() {

        fetch('http://localhost:3001/login?q=' + loginData.name)
            .then(res => res.json())
            .then(result => {
                console.log("result",result.length)
                //console.log(loginData.name)
                //result[0].name===loginData.name
               localStorage.clear();
                if (result.length> 0) {
                    console.log()
                    localStorage.setItem('result', JSON.stringify(result))

                    // after login successfully need to redirect to product list
                    navigate("/");

                    console.log(localStorage)
                    //console.warn(props.history.push('list'))
                } else {
                    alert("pleach check user name")
                }

            })
    }

    return (
        <div className='container'>
            <h4>To check Restaurant near by you</h4>
            <input
                type="text"
                placeholder='enter name'
                className="mb-3"
                name="name"
                value={loginData.name}
                onChange={getFormData}
            />
            <br />
            <input
                type="text"
                placeholder='enter password'
                className="mb-3"
                name="password"
                value={loginData.password}
                onChange={getFormData} />
            <br />
            <Button
                variant="primary"
                type="submit"
                className='px-4'
                onClick={getUserData}>Login</Button>
        </div>
    )
}

export default Login;