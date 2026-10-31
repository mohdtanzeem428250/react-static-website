import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Product from './components/pages/Product'
import ProductDetails from './components/pages/ProductDetails'
function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product-details/:pid" element={<ProductDetails />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
