import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout