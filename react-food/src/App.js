import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import UpdateList from './components/UpdateList';
import { BrowserRouter,  Route, Routes} from "react-router-dom";
import CreateRestaurant from './components/CreateRestaurant';
import SearchRestaurant from './components/SearchRestaurant';


function App() {
  return (
    <div className="App">
      
   

      <BrowserRouter>
      <Menu/>
      <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/create-restaurant" element={<CreateRestaurant />}></Route>
          <Route path="/product-list" element={<ProductList />}></Route>
          <Route path="/update-list/:id" element={<UpdateList />}></Route>
          {/* /:id or /:slug ye sbhi dynamicly data ko get krne ke liye url me pass kiye jate hai 
          can also send one more data /:id/:name
           */}
          {/* <Route
            path="/update-list/:id"
            render={props => (<UpdateList {...props} />)}>
          </Route> */}

          <Route path="/search-restaurant" element={<SearchRestaurant />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;