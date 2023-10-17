import { BrowserRouter,Routes,Route } from "react-router-dom";

import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Jwellary from "./Pages/Jwellary";
import Electronics from "./Pages/Electronics";
import Login from "./Pages/Login";
import Log from "./Pages/Log";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Product from "./Pages/Product";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
      <Route path='/' exact element={<> <Header/> <Home/> <Footer/></>}></Route>
      <Route path='/Home' index element={<> <Header/> <Home/> <Footer/></>}></Route>
      <Route path='/Product'  element={<> <Header/> <Product/> <Footer/></>}></Route>
      <Route path='/Jwellary'  element={<> <Header/> <Jwellary/> <Footer/></>}></Route>
      <Route path='/Electronics'  element={<> <Header/> <Electronics/> <Footer/></>}></Route>
      <Route path='/Contact'  element={<>  <Contact/></>}></Route>
      <Route path='/Profile'  element={<> <Profile/> </>}></Route>
      <Route path='/Login'  element={<><Login/></>}></Route>
      <Route path='/Log'  element={<><Log/></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
