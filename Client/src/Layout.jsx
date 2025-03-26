import React from 'react'
import TopNav from './Component/Topnav'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

function Layout() {
  return (
    <>
    <TopNav/>
    <main style={{margin:"50px"}} id='out'><Outlet/></main>
    <Footer/>
    </>
  )
}

export default Layout