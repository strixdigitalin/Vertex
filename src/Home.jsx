import React from 'react'
import { useEffect } from 'react';

const Home = (props) => {
    useEffect(()=>{
        props.setFlag(!props.flag);
    },[]);
    
    return (
        <>
            <div className="main1">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/images/slider 1.png" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/assets/images/slider2.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="main2">
                <img src="/assets/images/home image.png" alt="" />
            </div>
            <div className="main3">
                <img src="/assets/images/home image 2.png" alt="" />
            </div>
            <div className="main4">
                <img src="/assets/images/home-right-content.png" alt="" />
                <div className="main41">
                    <h4>SALIENT FEATURES OF VERTEX EDUCATIONS</h4>
                    <ul>
                        <li>Well proven, exeperienced and stable faculty team</li>
                        <li>Regular doubt clearing classes by the same faculty
                            team</li>
                        <li>Well planned academic curriculum</li>
                        <li>Well trained and well behaved, support staﬀs</li>
                        <li>Parental caring of students</li>
                        <li>Focused and disciplined teaching to generate
                            excellent result.</li>
                        <li>Regular tests with detailed analysis of test
                            performance.</li>
                        <li>Easy access of teachers for the students as well as
                            parents.</li>
                        <li>Well designed study material</li>
                        <li>Excellent infrastructure with air-conditioned
                            classroom.</li>
                        <li>Special study material, classes and test for KVPY,
                            Olympiads & NTSE.</li>
                        <li>Special rank enhancement study material for rapid
                            revision of entire syllabus</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Home;
