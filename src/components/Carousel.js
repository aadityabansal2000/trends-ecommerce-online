import React from 'react'
import m1 from './constants/m1.PNG'
import m2 from './constants/m2.PNG'
import m3 from './constants/m3.PNG'
import m4 from './constants/m4.PNG'
import m5 from './constants/m4.PNG'
import m6 from './constants/m4.PNG'
export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit":"contain !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className="carousel-caption" style={{"zIndex":"100",height:"100px" , marginBottom:"190px"}}>
                    <div className="col-lg-10" style={{float:"none", margin:"0 auto"}}>
                          <h1 className="title">Trends</h1>
                         <h3 className="subtitle">One stop fashion brand</h3>
                    </div>
                    </div>

                    <div className="carousel-item active">
                        <img src={m1} className="d-block w-100 container-fluid imgfill" style={{"filter":"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={m2} className="d-block w-100 container-fluid imgfill" style={{"filter":"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={m3} className="d-block w-100 container-fluid imgfill" style={{"filter":"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={m4} className="d-block w-100 container-fluid imgfill" style={{"filter":"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={m5} className="d-block w-100 container-fluid imgfill" style={{"filter":"brightness(50%)"}} alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src={m6} className="d-block w-100 container-fluid imgfill" style={{"filter":"brightness(50%)"}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
    )
}
