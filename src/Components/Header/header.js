import React, { useState } from 'react'
import css from "./header.css"
import logo from "../../Assets/img/logo.png"
import { BrowserRouter, Link} from "react-router-dom"

export const Header = () => {

    const [sticky, setsticky] = useState(false);
    const [menu, setmenu] = useState(false)
    

    window.onscroll = () => {
        let y = window.scrollY
        y > 0 ? setsticky(true) : y == 0 ? setsticky(false) : setsticky(false)
    }

  return (
    <>
    <header className={!sticky ? "header" : "header active"}>

        <div className="logo">
            <img src={logo} alt="logo"/>
            <span>Pyzon</span>
        </div>

    <div className="right">

        <i className={menu ? "fas fa-times menu-icon" : "fas fa-bars menu-icon"} onClick={() => {setmenu(prev => !prev)}}></i>

        <nav className="menu">
            <ul className={menu ? "nav-list active" : "nav-list"}>
                <Link to="/" className="nav-list-item">Home</Link>
                <Link to="/" className="nav-list-item">Products</Link>
                <Link to="/" className="nav-list-item">Sales</Link>
                <Link to="/" className="nav-list-item">About</Link>
                <Link to="/" className="nav-list-item">Contact</Link>
            </ul>
        </nav>

        <input type="text" className="search" placeholder='Search'/>

        <span><i className='fas fa-shopping-cart cart'></i></span>

    </div>


    </header>
    </>
  )
}
