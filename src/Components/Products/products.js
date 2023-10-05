import React, { useState } from 'react'
import css from "./products.css"
import { AllProducts } from "../../Assets/data/products"
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useNavigate } from 'react-router-dom'

export const Products = () => {

    const nav = useNavigate()

    const goToDetails = (e) => {
        nav("/productDetail", {
            state: {
                product: e
            }
        })
    }

    const [parent] = useAutoAnimate()

    const [menuProducts, setmenuProducts] = useState(AllProducts)

    const filter = (type) => {
        setmenuProducts(AllProducts.filter((product) =>
         product.type == type)
         )
    }

  return (
    <>
    <section className="products-section">

        <h3 className="heading">our <span>feature</span> products</h3>
        
        <div className="row">


        <div className="allProducts">
            <ul className="menu">
                <li className="products-cat" onClick={() => setmenuProducts(AllProducts)}>all</li>
                <li className="products-cat" onClick={() => filter("shoes")}>shoes</li>
                <li className="products-cat" onClick={() => filter("shirt")}>shirts</li>
                <li className="products-cat" onClick={() => filter("watch")}>watches</li>
            </ul> 
        </div>

        <div className="productsList" ref={parent}>

            {
                menuProducts.map((product, i) => {
                    return(
                        <div className="card" key={i}>

                        <div className="left-s">

                        <div className="productDetails">
                            <span className='name'>{product.name}</span>
                            <span className='content'>{product.content}</span>
                        </div>

                        <span className='price'>{product.price}</span>
                        <div className='shop-btn' onClick={() => {goToDetails(product)}}>Shop now</div>

                        <img src={product.img} alt={product.name} className="productImage" />

                    </div>
                        </div>
                        )
                    })
                }

        </div>

    </div>
    </section>
    </>
  )
}
