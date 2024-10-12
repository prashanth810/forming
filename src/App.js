import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbarforall from './components/homenavbar/Navbarforall';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Homepage from './components/Homepage';
import Allproductsfv from './components/allproducts/Allproductsfv';
import About from './components/about/About';
import Feactures from './components/feactures/Feactures';
import Contact from './components/contact/Contact';
import Singlepage from './components/single page/Singlepage';
import Refreshhandler from './components/privateauthentication/Refreshhandler';
import Checkout from './components/checkoue page/Checkout';

const App = () => {
  const [isAuthentication, setIAuthentication] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('Loginuser');
    if (isUserLoggedIn) {
      setIAuthentication(true);
    }
  }, []);

  const handleLogin = () => {
    setIAuthentication(true);
  };

  const Privaterouter = ({ element }) => {
    return isAuthentication ? element : <Navigate to='/' />;
  };

  return (
    <>
      <Refreshhandler setIAuthentication={setIAuthentication} />
      <Navbarforall />
      <Routes>
        {/* <Route path='/' element={<Login onLogin={handleLogin} />} />
        <Route path='/register' element={<Signup />} /> */}

        {/* check out  */}
        <Route path='/checkout' element={<Checkout />} />


        <Route path='/' element={<Privaterouter element={<Homepage />} />} />
        <Route path='/allfruits' element={<Privaterouter element={<Allproductsfv />} />} />
        <Route path='/about' element={<Privaterouter element={<About />} />} />
        <Route path='/feactures' element={<Privaterouter element={<Feactures />} />} />
        <Route path='/contact' element={<Privaterouter element={<Contact />} />} />
        <Route path='/fruits/:id' element={<Privaterouter element={<Singlepage />} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
