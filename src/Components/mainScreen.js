import React from 'react'
import { Header } from "./Header/header";
import { Hero } from "./Hero/hero";
import { Slider } from "./Slider/slider";
import { Virtual } from "./Virtual/virtual";
import { Products } from "./Products/products";
import { Testimonials } from "./Testimonials/testimonials";
import { Footer } from "./Footer/footer";



export const MainScreen = () => {
  return (
    <>
    <div className="app">

    <Header/>
    <div className="wrapper">
      
    <Hero/>
    <Slider/>
    <Virtual/>
    <Products/>
    <Testimonials/>
    <Footer/>

    </div>

    </div>
    </>
  )
}
