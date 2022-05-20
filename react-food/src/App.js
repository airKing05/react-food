import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import ProductList from './components/ProductList';
import UpdateList from './components/UpdateList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateRestaurant from './components/CreateRestaurant';
import SearchRestaurant from './components/SearchRestaurant';
import Login from './components/Login';
import Logout from './components/Logout';
import Protected from './components/Protected';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Menu/>   if use redux its okay 
      but page not refreshing every time so we did it */}
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
          <Route path="/" element={<Protected Component={Home} />}> </Route>
          {/* <Route path="/" element={<Home />}> </Route> */}

          <Route path="/create-restaurant" element={<Protected Component={CreateRestaurant} />}> </Route>
          {/* <Route path="/create-restaurant" element={<CreateRestaurant />}></Route> */}

          <Route path='/product-list' element={<Protected Component={ProductList} />}></Route>
          {/* <Route path="/product-list" element={<ProductList />}></Route> */}

          <Route path="/update-list/:id" element={<Protected Component={UpdateList} />}></Route>
          {/* <Route path="/update-list/:id" element={<UpdateList />}></Route> */}
          {/* /:id or /:slug ye sbhi dynamicly data ko get krne ke liye url me pass kiye jate hai 
          can also send one more data /:id/:name
           */}
          {/* <Route
            path="/update-list/:id"
            render={props => (<UpdateList {...props} />)}>
          </Route> */}

          <Route path="/search-restaurant" element={<Protected Component={SearchRestaurant} />}></Route>
          {/* <Route path="/search-restaurant" element={<SearchRestaurant />}></Route> */}
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;