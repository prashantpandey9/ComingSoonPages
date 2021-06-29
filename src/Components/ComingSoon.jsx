import React from 'react'
import './ComingSoon.css'
import Code from './code.svg'
import Drop from './drop.svg'
export default function ComingSoon() {
    return (
        <div className="container-fluid main">
            <div className="row">
                <div className="col-md-2 col-sm-2 col-12"></div>
                <div className="col-md-8 col-sm-8 col-12 m-auto heading text-center">
                    <img src={Code} alt="" />
                    <h1 className='pt-5'>We're launching soon!</h1>
                    
                    <p>
                    We’re working hard on this. Please enter your email below to get notified about the launch at the earliest.
                    </p>

                    <span>
                        <input  
                            className='emailbar' 
                            type="text"
                            placeholder='Enter your mail' 
                            name="query" 
                        /> 
                        <span className='image'>
                            <img src={Drop} alt="" />
                        </span>
                    </span>
                    
                    
                </div>
                <div className="col-md-2 col-sm-2 col-12"></div>
            </div>
        </div>
    )
}
