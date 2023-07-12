import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import Storefront from './Components/Storefront';
import ProductDetails from './Components/ProductDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Storefront />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
