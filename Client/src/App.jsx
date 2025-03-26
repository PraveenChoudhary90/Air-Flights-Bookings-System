
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Registraction from './Pages/Registraction'
import Booking from './Pages/Booking'
import DashBoard from './Pages/Dashboard'
import MyBookings from './Pages/MyBooking'
import Delete from './Pages/Delete'
import CustomerRegistraction from './Pages/CustomerRegistraction'


function App() {
  

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>} >
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='book' element={<Booking/>}/>
    <Route path='registraction' element={<Registraction/>}/>
    <Route path='customerRegistraction' element={<CustomerRegistraction/>}/>
    </Route>
  </Routes>
  <Routes>
        <Route path='dashboard' element={<DashBoard/>}>
        <Route path='mybookings' element={<MyBookings/>}/>
        <Route path="delete/:id" element={<Delete/>}/>
        </Route>
      </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
