import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
import NotFound from "./containers/NotFound/NotFound"

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/" exact element={<ProductList/>}/>
              <Route path="/product/:productId" exact element={<ProductDetails/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
