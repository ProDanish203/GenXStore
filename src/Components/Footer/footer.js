import React from 'react'
import css from "./footer.css"
import logo from "../../Assets/img/logo.png"

export const Footer = () => {
  return (
    <>
    
    <section className="footer-section">

        <footer>
            <div className="line"></div>

            <div className="grid-5">

                <div className="footer-div">
                    <div className="footer-heading">
                        <img src={logo} alt="logo" className='footer-logo' />
                        <span>Pyzon</span>
                    </div>
                </div>

                <div className="footer-div">
                    <div className="footer-heading">
                        contact us
                    </div>

                    <ul className="footer-list">

                        <li className="footer-list-item">
                            <i className='fas fa-location-dot footer-logo'></i>
                            <span className='footer-detail'>123 street, houston road, Washington, USA</span>
                        </li>
                        <li className="footer-list-item">
                            <i className='fas fa-phone footer-logo'></i>
                            <span className='footer-detail'>09-2435-276-27</span>
                        </li>
                        <li className="footer-list-item">
                            <i className='fas fa-message footer-logo'></i>
                            <span className='footer-detail'>dummy@gmail.com</span>
                        </li>

                    </ul>

                </div>

                <div className="footer-div">
                    <div className="footer-heading">           
                        Account
                    </div>
                    <ul className="footer-list">

                        <li className="footer-list-item">
                            <i className='fas fa-user footer-logo'></i>
                            <span className='footer-detail'>Sign in</span>
                        </li>
                        <li className="footer-list-item">
                            <i className='fas fa-user footer-logo'></i>
                            <span className='footer-detail'>Login</span>
                        </li>

                    </ul>
                </div>

                <div className="footer-div">
                    <div className="footer-heading">
                        Company
                    </div>

                    <ul className="footer-list">

                        <li className="footer-list-item">
                            <i className='fas fa-map footer-logo'></i>
                            <span className='footer-detail'>About Us</span>
                        </li>

                    </ul>

                </div>

            </div>

        </footer>

    </section>
    
    </>
  )
}
