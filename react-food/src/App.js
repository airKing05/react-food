import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import UpdateList from './components/UpdateList';
import { BrowserRouter,  Route, Routes} from "react-router-dom";
import CreateRestaurant from './components/CreateRestaurant';

function App() {
  return (
    <div className="App">
      
   

      <BrowserRouter>
      <Menu/>
      <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/create-restaurant" element={<CreateRestaurant />}></Route>
          <Route path="/product-list" element={<ProductList />}></Route>
          <Route path="/update-list" element={<UpdateList />}></Route>
    
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;