import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Storefront from './Components/Storefront';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Storefront />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
