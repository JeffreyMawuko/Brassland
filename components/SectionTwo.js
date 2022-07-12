import { Fragment, useState } from 'react';

const SectionTwo = () => {

    const [tab, setTab] = useState({tab:'pay', bgColor:'bg-green', title:'Pay with Brassica', image:'/assets/images/bg/group_5386.png', imageSize:'w-75',
    description:'Brassica Pay is the preferred provider of retail micro-investment services, ordered through digital channels encouraging investments for all types of investors.'});

    function handleChangeTab(tab){
        if(tab === 'pay'){
            setTab({tab:'pay', bgColor:'bg-green', title:'Pay with Brassica', image:'/assets/images/bg/group_5386.png', imageSize:'w-75',
            description:'Brassica Pay is the preferred provider of retail micro-investment services, ordered through digital channels encouraging investments for all types of investors.'}
            );
        
        }else if(tab === 'buy'){
            setTab({tab:'buy', bgColor:'bg-wine', title:'Buy the smart way', image:'/assets/images/bg/group_5380.png', imageSize:'w-100',
            description:'Brassica Pay is the preferred provider of retail micro-investment services, ordered through digital channels encouraging investments for all types of investors.'}
            );
        }else if(tab==='transfer'){
            setTab({tab:'transfer', bgColor:'bg-off-green', title:'Transfers made easy with a click', image:'/assets/images/bg/group_5386.png', imageSize:'w-75',
            description:'Brassica Pay is the preferred provider of retail micro-investment services, ordered through digital channels encouraging investments for all types of investors.'}
            );
        }else{
            setTab({tab:'invest', bgColor:'bg-dark-green', title:'Grow your wealth, Invest with Us', image:'/assets/images/bg/6.png', imageSize:'w-100',
            description:'Brassica Pay is the preferred provider of retail micro-investment services, ordered through digital channels encouraging investments for all types of investors.'}
            );
        }
    }
    
  return(
    <Fragment>
        
        <section className={`rounded-3r ${tab.bgColor} mt-5 mb-5 vh-75`} style={{minHeight: "700px"}}>
            <div className='container mb-5'>
                <div className='row d-flex align-items-center mb-5'>
                    <div className='col-4'></div>
                    <div className='col-6'>
                        <div className="btn bg-green-1 rounded-pill mb-2 mb-lg-0 mt-5">
                            <button className={`btn ${tab.tab==='pay'?'btn-warning':'btn-outline-success bg-white text-white'} rounded-pill px-4 mb-2 mb-lg-0 me-4`} onClick={()=>handleChangeTab('pay')}>
                                <span className="d-flex align-items-center">
                                    <span className={`small ${tab.tab==='pay'?'text-black':'text-green'}`}>Pay</span>
                                </span>
                            </button>
                            <button className={`btn ${tab.tab==='buy'?'btn-warning':'btn-outline-success bg-white text-white'} rounded-pill px-4 mb-2 mb-lg-0 me-4`} onClick={()=>handleChangeTab('buy')}>
                                <span className="d-flex align-items-center">
                                    <span className={`small ${tab.tab==='buy'?'text-black':'text-green'}`}>Buy</span>
                                </span>
                            </button>
                            <button className={`btn ${tab.tab==='transfer'?'btn-warning':'btn-outline-success bg-white text-white'} rounded-pill px-4 mb-2 mb-lg-0 me-4`} onClick={()=>handleChangeTab('transfer')}>
                                <span className="d-flex align-items-center">
                                    <span className={`small ${tab.tab==='transfer'?'text-black':'text-green'}`}>Transfer</span>
                                </span>
                            </button>
                            <button className={`btn ${tab.tab==='invest'?'btn-warning':'btn-outline-success bg-white text-white'} rounded-pill px-4 mb-2 mb-lg-0`} onClick={()=>handleChangeTab('invest')}>
                                <span className="d-flex align-items-center">
                                    <span className={`small ${tab.tab==='invest'?'text-black':'text-green'}`}>Invest</span>
                                </span>
                            </button>
                            
                        </div>
                    </div>
                    <div className='col-2'></div>

                </div>
               
                <div className="row mt-5 mb-5">
                    <div className="col-md-4 offset-md-2 col-sm-12 mt-5">
                        <div className="text-white h3 mt-5">{tab.title}</div>
                        <div className="small text-white mt-4">{tab.description}</div>

                        <div className="btn-toolbar mt-4">
                            <button className={`btn btn-outline-white text-white rounded-pill px-4 mb-2 mb-lg-0 ${tab.bgColor}`}>
                                <span className="d-flex align-items-center">
                                    <span className="small text-white">Get Started</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 col-sm-6 d-flex align-items-center' style={{marginBottom:"10%"}}>
                        <img src={`${tab.image}`} className={`z-index ${tab.imageSize}`}></img>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)}
export default SectionTwo
