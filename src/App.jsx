import './App.css'
// import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/menu/NavBar'
import ItemListContainer from './components/products/ItemListContainer';
import Item from './components/products/Item';
import CartView from "./components/cart/CartView"; 
import CheckoutView from "./components/checkout/CheckoutView";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
     <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:categoria" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<Item/>}/>
            <Route exact path="/cart" element={<CartView />} />
            <Route exact path="/checkout" element={<CheckoutView />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App