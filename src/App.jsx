import React from 'react';
import { Routes, Route }  from 'react-router-dom';

import Home from './pages/home/home';
import Cart from './pages/cart/cart';
import Login from './pages/login/login';
import ProductDetail from './pages/productdetail/productdetail';
import PrivateRoute from './components/common/privateroute';
import Checkout from './pages/checkout/checkout';
import Profile from './pages/profile/profile';
import AdminRoute from './components/common/adminroute';
import AdminLanding from './pages/admin/adminLanding';

import Inventory from './pages/admin/inventory';
import AdminProfile from './pages/admin/adminLanding';
import Header from './components/layout/header/header';


import Step1_Shipping from './pages/checkout/steps/step1_shipping';
import Step2_Review from './pages/checkout/steps/step2_review';
import Step2_Payment from './pages/checkout/steps/step2_payment';
import Step3_Confirmation from './pages/checkout/steps/step3_confirmation';
import Products from './pages/products/products';




export default function App() {
  

  return (
       
      <div>
        <Header />
        <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path='/shopSphere' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path='/products' element={<Products/>} />
          <Route path='/product/:id' element={<ProductDetail />} />
         
         
          <Route path="/checkout" element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }> 
          <Route index element={<Step1_Shipping />} />
          <Route path="review" element={<Step2_Review />} />
          <Route path="payment" element={<Step2_Payment />} />
          <Route path="confirmation" element={<Step3_Confirmation />} />
          </Route>
           
           
          <Route path="/profile" element={
             <PrivateRoute>
                <Profile />
             </PrivateRoute>
            }/>

          
          
          <Route path='/admin' element={<AdminLanding />}/>
          <Route path='/admin/profile' element={
            <AdminRoute>
              <AdminProfile />
            </AdminRoute>
          }/>
          <Route path='/admin/inventory' element={
            <AdminRoute>
              <Inventory />
            </AdminRoute>
          }/>
        </Routes>
      </div>
    
  );
};


