import Head from 'next/head'
import { Fragment } from 'react';

const SectionThree = () => {
    
  return(
    <Fragment>
        <div className='container'>
        <section style={{marginTop:"10%"}}>
            <div className='row d-flex align-items-center mb-5 text-center'>
                <p className='text-green h3 mb-5'>Brassica Pay</p>
                <p className='text-green'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-6'>Brassica is Africa’s most trusted investment partner, offering agile, innovative, 
                            and effective investment solutions to people all over the world in a bid to help
                            more people accrue wealth.</div>
                        <div className='col-md-3'></div>
                    </div>
                </p>
            </div>
            <div className="row mb-5">
                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3"><img src="/assets/images/bg/group_5379.png" className='z-index w-75'></img></div>
                    </div>
                    <div className="col text-green">
                        <p className="h3 mb-5 mt-4">You are a brand Steward</p>
                        <p>As part of the Brassica family, you get to shape what
                            people say about us. You are a brand steward.
                            And that’s where this book comes in—to give you
                            guidelines on how best to tell our brand story. We
                            want you to own our brand. It’s yours, and it’s yours
                            to protect in everything you do.</p>
                            <p className='mt-5'>
                                <button className="btn btn-green rounded-pill px-5 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                                    <span className="d-flex align-items-center">
                                        <span className="small">Be a steward</span>
                                    </span>
                                </button>
                            </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row gx-5">
                    
                    <div className="col text-green">
                        <p className="h3 mb-5 mt-4">Invest your way into the future.</p>
                        <p>Brassica is Africa’s most trusted investment partner,
                            offering agile, innovative, and effective investment
                            solutions to people all over the world in a bid to help
                            more people accrue wealth.</p>
                            <p className='mt-5'>
                                <button className="btn btn-green rounded-pill px-5 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                                    <span className="d-flex align-items-center">
                                        <span className="small">Start Investing</span>
                                    </span>
                                </button>
                            </p>
                    </div>
                    <div className="col">
                        <div className="p-3"><img src="/assets/images/bg/group_5380.png" className='z-index w-75'></img></div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </Fragment>
)}
export default SectionThree
