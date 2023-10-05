import React from 'react'
import css from "./hero.css"
import HeroImg from "../../Assets/img/hero.png";
import { motion } from "framer-motion"

export const Hero = () => {

    const transition = {duration: 2, type: "spring"}

  return (
    <>
    
    <section className='hero-section'>

        <div className="hero-container">

            <div className="hero-side">
                
                <span className='text1'>Best Shoe Collection</span>
                <div className="text2">
                    <span>Trendy Collection</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reprehenderit nisi quam fugiat</span>
                </div>

            </div>

            <div className="hero-middle">
                <motion.div initial={{bottom: "2rem"}} whileInView={{bottom: "0rem"}} transition={transition} className="heroCircle"></motion.div>
                <motion.img   animate={{ x: [null, 100, 0] }} src={HeroImg} alt="heroImg" className='heroImg'/>

                <div className="cart2">
                    <i className='fas fa-shopping-cart cart2-icon'></i>

                    <div className="signup">
                        <span>best signup offer</span>
                        <i className='fas fa-arrow-right arrow-icon'></i>
                    </div>

                </div>

            </div>

            <div className="hero-side">
                <div className="traffic">
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className="traffic">
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>

        </div>


    </section>
    
    </>
  )
}
