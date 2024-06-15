import React, { Suspense, useContext } from 'react';
import UiContextProvider from './context/UiContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { authContext } from './context/AuthContext';
import Spinner from './Component/Spinner/Spinner';

const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Cart = React.lazy(() => import('./pages/Cart'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const LogIn = React.lazy(() => import('./pages/LogIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const AuthErr = React.lazy(() => import('./pages/AuthErr'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const BlogDetails = React.lazy(() => import('./pages/BlogDetails'));



const App = () => {
  const {isLogIn} = useContext(authContext)
  const queryClient = new QueryClient({
    defaultOptions:{
      staleTime:0
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Spinner/>}>
            <UiContextProvider>
              <Routes>
                <Route path='/' element={<Home/>}  />
                <Route path='/products' element={<Navigate to='/products/equipment'/>}/>
                <Route path='/products/:productcategory' element={<Products/>}  />
                <Route path='/product/:productid' element={<ProductDetails/>}  />
                <Route path='/blogs' element={<Blogs/>}  />
                <Route path='/blogs/:blogid' element={<BlogDetails/>}  />
                <Route path='/aboutus' element={<AboutUs/>}  />
                <Route path='/Cart' element={isLogIn ? <Cart/> : <AuthErr/>}  />
                <Route path='/login' element={<LogIn/>}  />
                <Route path='/signup' element={<SignUp/>}  />
                <Route path='*' element={<NotFound/>}  />
              </Routes>
            </UiContextProvider>
          </Suspense>
    </QueryClientProvider>

  
  );
};

export default App;