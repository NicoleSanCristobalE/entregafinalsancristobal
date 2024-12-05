import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/menu/NavBar'
import ItemListContainer from './components/products/ItemListContainer';
import Item from './components/products/Item';

function App() {
  return (
    <>
     <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:categoria" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<Item/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App