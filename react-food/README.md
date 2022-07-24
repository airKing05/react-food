
# React Food App

React-Food App is built with latest development tools.




 - ReactJs is use to develop the ui part
 - Fully responsible ui 
 - To enhance the Ui Bootstrap ans Unicorn icon is use
 - JSON server for the data storage.

This React-Food App works for all the device.

## Some feature 
 - This is APP follow functional base react architecture.
 - This is **CRUD** application.
 - Searching feature is all added here with **Debouncing technique**.
 - Can search by Restaurant name, Dieshes name, Area etc.
 - For the user Authentication the user login/logout page is also included.
 - To keep App simple one user Id with Password are added 

 ## Some Ui feature 
 - To enhance the simple CRUD app one Carousal of the beautiful Images.
 - To access the restaurant details easily one Accordion is added in Home page.


## Screenshots
#### Home page in full size 

![App Screenshot](https://github.com/airKing05/react-food/blob/main/react-food/screenShot/Screenshot%202022-07-24%20at%202.29.56%20PM.png?raw=true)

#### Mobile Views
- Accordion

A beautiful accordion without using any library.

![App Screenshot](https://github.com/airKing05/react-food/blob/main/react-food/screenShot/Screenshot%202022-07-24%20at%202.31.29%20PM.png?raw=true)



- Add Restaurant into api

![App Screenshot](https://github.com/airKing05/react-food/blob/main/react-food/screenShot/Screenshot%202022-07-24%20at%202.32.09%20PM.png?raw=true)

- Details of Restaurant and their dishes

![App Screenshot](https://github.com/airKing05/react-food/blob/main/react-food/screenShot/Screenshot%202022-07-24%20at%202.32.43%20PM.png?raw=true)

#### Search section

![App Screenshot](https://github.com/airKing05/react-food/blob/main/react-food/screenShot/Screenshot%202022-07-24%20at%202.33.37%20PM.png?raw=true)

#### Cart section

- SignUp / SignIn section

![App Screenshot](https://github.com/airKing05/react-food/blob/main/react-food/screenShot/Screenshot%202022-07-24%20at%202.34.14%20PM.png?raw=true)



## API Reference

#### Get all items
Start Json server
```bash
  $ json-server --watch db.json --port 3001
```
**Login API**
```http
  GET /login
```
There is only one user exist to keep App simple
```bash
  [
    {
      "name": "anilraj",
      "password": "12345"
    }
  ]
```

**Restaurant API**
```http
  GET /restaurant
```
Restaurant api data look like
```bash
  [
    {
      "name": "Pizza Hut",
      "address": "noida",
      "rating": "4.3",
      "email": "pizzahut@test.com",
      "id": 1
    },
    {
      "name": "lapinoz",
      "address": "hojkhas",
      "email": "lapinoz@gmail.com",
      "rating": "4.8",
      "id": 2
    }
]
```



## Tech Stack

**Client:** React, Bootstrap, CSS

**Server:** for the Database db.json file is created in using the JSON server.


## Installation

GitHub Repositry of React-Food-App
```bash
https://github.com/airKing05/react-food.git
```

Install my-project with npm
```bash
  npm install my-project
  cd my-project
```

Install of Json server to connect the Database
```bash
npm install -g json-server  
```   