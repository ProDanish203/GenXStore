import React from 'react'
import { useLocation } from 'react-router-dom'
import css from "./details.css"
import { Header } from "../Header/header"

export const Details = () => {

    const loc = useLocation()
    console.log(loc);

  return (
    <>
    <Header/>

    <section className='details-section'>

        <div className="prod-row">

            <div className="col1">
                <img src={loc.state.product.img} alt={loc.state.product.name} />
            </div>

            <div className="col2">
                <h2 className='prod-name'>{loc.state.product.name}</h2>
                <p className='prod-desc'>{loc.state.product.content}</p>

                <p className='prod-content'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt laborum aperiam reiciendis. Odio, aut praesentium! Placeat non eos cumque natus repudiandae molestias ex nobis! Nam quisquam provident ea tenetur repellat?
                </p>

                <div className="price">
                <span className='prod-price'>{loc.state.product.price}</span>
                <span className='prod-cat'>category: {loc.state.product.cat}</span>
                </div>

                <button className='btn'>Buy Now</button>
            </div>

        </div>

    </section>

    </>
  )
}
