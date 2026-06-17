import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable Pricing</h1>
                    <p>That's why 1.3+ crore customers trust Zerodha with Rs3.5+ lakh crores worth of equity investments.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign" aria-hidden="true"></i>0</h1>
                            <p>Free equity delivery and direct mutual funds.</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'><i class="fa-solid fa-indian-rupee-sign" aria-hidden="true"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;