import Head from 'next/head'
import { Fragment } from 'react';

const SectionOne = () => {
    
  return(
    <Fragment>
        <div className='container'>
        <section style={{marginTop:"15%"}}>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="fw-bold text-green h1">Join the Brassica family</div>
                    <div className="small text-green mt-4">Send money home to your loved ones at the click of a button across Africa. We&apos;re currently available only in Ghana. 
                    We&apos;ll be expanding to new African countries soon.</div>

                    <div className="btn-toolbar mt-4">
                        <div className="btn-group me-2">
                            <button className="btn btn-warning rounded-pill px-4 mb-2 mb-lg-0 text-green bg-yellow">
                                <span className="d-flex align-items-center me-2">
                                    <i className="bi-apple me-2 fs-4"></i>
                                    <span className="small text-wrap" ><span className='small lh-1'>Download on</span> <h6 className='fs-6 lh-1'>App Store</h6></span>
                        
                                </span>
                            </button>   
                        </div>
                        <div className="btn-group me-2" >
                            <div className="btn-group me-2" >
                                <button className="btn btn-outline-success rounded-pill px-4 mb-2 mb-lg-0 text-green bg-white">
                                    <span className="d-flex align-items-center">
                                        <i aria-hidden className="fab fa-google-play me-2 fs-4"></i>
                                        <span className="small text-wrap" ><span className='small lh-1'>Get it on</span> <h6 className='fs-6 lh-1'>Google Play</h6></span>
                                    </span>
                                </button>   
                            </div>
                            
                        </div>
                        
                    </div>

                </div>
                <div className='col-md-6 col-sm-6'>
                    <img src="https://www.coremobileapps.com/wp-content/uploads/intl-fb-showcase1.png" className='z-index' style={{width:"150%", marginTop:"-40%"}}></img>

                </div>
            </div>
        </section>
        </div>
    </Fragment>
)}
export default SectionOne
