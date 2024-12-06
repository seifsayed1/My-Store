import Navbar from "./home/nav";
import Welcome from "./home/welcome";
import Products from "./home/products";
import Details from "./home/details";
import Cart from "./cart";
import Category from "../src/categories";
import Login from "./log/login";
import Signup from "./log/signup";
import About from "../src/about";
import Contact from "../src/contact";
import Footer from "../src/home/footer";
import { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"

export const ProductsContext = createContext();
function App() {
  const [Product, setProduct] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProduct(data)); 
  },[]);
  return (
    <>
      <ProductsContext.Provider value={Product}>
        <Navbar />
        <Routes>
          <Route path="/" element={
                  <>
                    <Welcome />
                    <Products />
                  </>
                }
              /> 
          <Route path="/cart" element={
                  <>
                    <Cart />
                  </>
                }
              /> 
            <Route path="/details" element={
                  <>
                    <Details />
                  </>
                }
              /> 
            <Route path="/category" element={
                  <>
                    <Category />
                  </>
                }
              /> 
            <Route path="/login" element={
                  <>
                    <Login />
                  </>
                }
              /> 
            <Route path="/sign_up" element={
                  <>
                    <Signup />
                  </>
                }
              /> 
            <Route path="/about" element={
                  <>
                    <About />
                  </>
                }
              /> 
            <Route path="/contact" element={
                  <>
                    <Contact />
                  </>
                }
              /> 
        </Routes>
        <Footer />
      </ProductsContext.Provider>
    </>
  );
}
export default App;