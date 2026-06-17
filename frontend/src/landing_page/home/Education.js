import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>That's why 1.3+ crore customers trust Zerodha with Rs3.5+ lakh crores worth of equity investments.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p className='mt-5'>That's why 1.3+ crore customers trust Zerodha with Rs3.5+ lakh crores worth of equity investments.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Trading Q&A <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;