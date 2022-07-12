import Head from 'next/head'
import { Fragment } from 'react';

const Footer = () => {
    
  return(
    <Fragment>
        <div className='container'>
        <section style={{marginTop:"10%"}} className='mb-5'>
            <div className="row">
                <div className="col-md-3 col-sm-12 text-muted">
                    <ul className='list-unstyled'>
                        <li>Product</li>
                        <li>Pay</li>
                        <li>Invest</li>
                    </ul>
                    
                </div>
                <div className='col-md-3 col-sm-12 text-muted'>
                    <ul className='list-unstyled'>
                        <li>Legal</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy</li>
                    </ul>

                </div>
                <div className='col-md-3 col-sm-12 text-muted'>
                    <ul className='list-unstyled'>
                        <li>Contact with us</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Linkin</li>
                    </ul>

                </div>
                <div className='col-md-3 col-sm-12 text-muted'>
                    <p>Get regular product features, and company updates, delivered in your inbox.</p>
                    <div className="form-group mb-4">
                        <input type="text" name="name" className="form-control rounded-pill" id="mobile_no" placeholder="Your First Name"/>

                    </div>
                    <div className="form-group mb-4">
                        <input type="text" name="email" className="form-control rounded-pill" id="mobile_no" placeholder="Email"/>

                    </div>
                    <div className="btn-toolbar mt-4">
                        <button className="btn btn-outline-white text-white rounded-pill px-4 mb-2 mb-lg-0 bg-green">
                            <span className="d-flex align-items-center">
                                <span className="small text-white">Submit</span>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
        <section className='mt-5'>
            <p className='small text-grey text-center'>Copyright &copy; {new Date().getFullYear()} Brassica Pay</p>

        </section>
        </div>
    </Fragment>
)}
export default Footer
