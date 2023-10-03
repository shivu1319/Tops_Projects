import React from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Manage_categories from './Pages/Manage_categories'
import Add_categories from './Pages/Add_categories'
import Login from './Pages/Login'
import Manage_Products from './Pages/Manage_Products'
import Add_Products from './Pages/Add_Products'
import Manage_user from './Pages/Manage_user'
import Admin from './Pages/Admin'
import Edit_user from './Pages/Edit_user'

function App() {
  return (
    <BrowserRouter>
    <ToastContainer>  </ToastContainer>
    <Routes>
    <Route path='/' index element={<> <Login/> </>}></Route>
      <Route path='/' index element={<> <Header/> </>}></Route>
      <Route path='/Admin' index element={<> <Header/> <Admin/> </>}></Route>
      <Route path='/Home' index element={<> <Header/> <Home/> </>}></Route>
      <Route path='/Manage_categories' index element={<> <Header/> <Manage_categories/> </>}></Route>
      <Route path='/Add_categories' index element={<> <Header/> <Add_categories/> </>}></Route>
      <Route path='/Manage_Products' index element={<> <Header/> <Manage_Products/> </>}></Route>
      <Route path='/Add_Products' index element={<> <Header/> <Add_Products/> </>}></Route>
      <Route path='/Manage_user' index element={<> <Header/> <Manage_user/> </>}></Route>
      <Route path='/Edit_user/:id' index element={<> <Header/> <Edit_user/> </>}></Route>
      <Route path='/' index element={<> <Header/> </>}></Route>
      {/* <Route path='/Add_categories' index element={<> <Header/> <Add_categories/> </>}></Route> */}
      {/* <Route path='/About' index element={<> <Header/> <About/> <Footer/> </>}></Route>
      <Route path='/Feature' index element={<> <Header/> <Feature/> <Footer/> </>}></Route>
      <Route path='/Pricing' index element={<> <Header/> <Pricing/> <Footer/> </>}></Route>
      <Route path='/Review' index element={<> <Header/> <Review/> <Footer/> </>}></Route> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
