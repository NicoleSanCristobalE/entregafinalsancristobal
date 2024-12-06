import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CartProvider from "./context/CartContext";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
)