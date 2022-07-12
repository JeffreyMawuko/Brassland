import Head from 'next/head'
import { Fragment } from 'react';

const TopNav = () => {
    
  return(
    <Fragment>
        
        <nav className="navbar navbar-expand-lg navbar-light mt-4">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#page-top">
                    <img src="https://brassica.azurewebsites.net/assets/images/logo/brasicawhitelogo.svg" loading="lazy" alt="logo"/>

                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse z-index" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3 text-green" href="#features">Download</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3 text-green" href="#download">Invest</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3 text-green" href="#download">Pay</a></li>
                    </ul>
                    <button className="btn btn-green rounded-pill px-5 mb-2 mb-lg-0" >
                        <span className="d-flex align-items-center">
                            <span className="small">Login</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
        <div className="union"></div>
    </Fragment>
)}
export default TopNav
