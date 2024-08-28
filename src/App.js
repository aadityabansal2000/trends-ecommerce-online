
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './screens/Home.js';
import Shop from './screens/Shop.js';
import Contact from './screens/Contact.js';
import About from './screens/About.js';
import Product from './screens/Product.js';
import Cart from './screens/Cart.js';
function App() {
  return (
  
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/shop" element={<Shop/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/shop/:id" element={<Product/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;