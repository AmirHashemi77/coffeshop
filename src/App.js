import React from 'react';
import UiContextProvider from './context/UiContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';





const App = () => {

  const queryClient = new QueryClient({
    defaultOptions:{
      staleTime:0
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
        <UiContextProvider>
          <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/products' element={<Navigate to='/products/equipment'/>}/>
            <Route path='/products/:productcategory' element={<Products/>}  />
            <Route path='/product/:productid' element={<ProductDetails/>}  />
            <Route path='/blogs' element={<Blogs/>}  />
            <Route path='/blogs/:blogid' element={<BlogDetails/>}  />
            <Route path='/aboutus' element={<AboutUs/>}  />
            <Route path='/Cart' element={<Cart/>}  />
            <Route path='/login' element={<LogIn/>}  />
            <Route path='/signup' element={<SignUp/>}  />
            <Route path='*' element={<NotFound/>}  />
          </Routes>
        </UiContextProvider>
    </QueryClientProvider>

  
  );
};

export default App;