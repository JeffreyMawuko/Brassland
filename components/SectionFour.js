import { Fragment } from 'react';

const SectionFour = () => {
    
  return(
    <Fragment>
        
        <section className='rounded-3r bg-green mt-5 mb-5'>
            <div className='row mb-5 text-center'>
                <div className='col-md-12'>
                    <p className='text-white h3 mb-5 mt-5'>Download the app</p>
                    <div className='text-white'>
                        <div className='row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-4'>Access your money no matter when, no matter where. Our fast and secure app lets you make payments at anytime and anywhere.</div>
                            <div className='col-md-4'></div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center mb-5 mt-2'>
                    <div className="mt-4 mb-5 ms-5">
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
                
            </div>
        </section>
    </Fragment>
)}
export default SectionFour
