import React from 'react'
import './ComingSoon.css'
// import Code from './code.svg'
// import Drop from './drop.svg'
export default function ComingSoon() {
    return (
        <>
        <div className="container-fluid main">
            <div className="row">
                <div className="col-md-2 col-sm-2 col-12"></div>
                <div className="col-md-8 col-sm-8 col-12 m-auto heading text-center">
                    <h1 className='pt-5'>Product is coming soon</h1>
                    
                    <p>
                        We will be celebrating the launch of our new site very soon!
                    </p>

                   <button className='btn btn-primary'>Notify me!</button>
                    
                    
                </div>
                <div className="col-md-2 col-sm-2 col-12"></div>
            </div>
            
        </div>
        <footer className='text-center'>@2021 Coming Soon</footer>
        </>
    )
}
