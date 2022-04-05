import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../Pages/Login';
import RecoveryPassword from '../Pages/RecoveryPassword';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import SendEmail from '../Pages/SendEmail';
import NewPassword from '../Pages/NewPassword';
import MyAccount from '../Pages/MyAccount';
import CreateAccount from '../Pages/CreateAccount';
import Checkout from '../Pages/Checkout';
import Orders from '../Pages/Orders';
import '../styles/global.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/recovery-password' element={<RecoveryPassword/>} />
          <Route exact path='/send-email' element={<SendEmail/>} />
          <Route exact path='/new-password' element={<NewPassword/>} />
          <Route exact path='/account' element={<MyAccount/>} />
          <Route exact path='/signup' element={<CreateAccount/>} />
          <Route exact path='/checkout' element={<Checkout/>} />
          <Route exact path='/orders' element={<Orders/>} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
