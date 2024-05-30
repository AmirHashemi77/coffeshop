import React from 'react';
import UiContextProvider from './context/UiContext';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';




const App = () => {



  return (
    <UiContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/products' element={<Products/>}  />
        <Route path='/products/:productid' element={<ProductDetails/>}  />
        <Route path='/blogs' element={<Blogs/>}  />
        <Route path='/blogs/:blogid' element={<BlogDetails/>}  />
        <Route path='/aboutus' element={<AboutUs/>}  />
        <Route path='/Cart' element={<Cart/>}  />
        <Route path='*' element={<NotFound/>}  />
      </Routes>
    </UiContextProvider>

  
  );
};

export default App;