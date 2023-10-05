import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainScreen } from "./mainScreen";
import { Details } from "./ProductDetails/details"

export const Router = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<MainScreen/>}></Route>
        <Route path='productDetail' element={<Details/>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}
