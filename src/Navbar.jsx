import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navOp = [{
    cat: 'HOME',
    subcat: [],
    link: '/'
},
{
    cat: 'ELIGIBILITY',
    subcat: [],
    link: '/eligiblity'
},
{
    cat: 'SYLLABUS',
    subcat: [{
        name: 'For Class 7 Studying Students going to Class 8 in 2023',
        link: '/syllabus/7'
    }, {
        name: 'For Class 8 Studying Students going to Class 9 in 2023',
        link: '/syllabus/8'
    }, {
        name: 'For Class 9 Studying Students going to Class 10 in 2023',
        link: '/syllabus/9'
    }, {
        name: 'For Class 10 Studying Students going to Class 11 in 2023',
        link: '/syllabus/10'
    }, {
        name: 'For Class 10 Studying Students going to Class 11 in 2023',
        link: '/syllabus/11'
    }, {
        name: 'For Class 11 Studying Students going to Class 12 [E] in 2023',
        link: '/syllabus/12'
    }, {
        name: 'For Class 11 Studying Students going to Class 12 [M] in 2023',
        link: '/syllabus/13'
    }]
},
{
    cat: 'SAMPLE PAPER',
    subcat: [],
    link: '/sample-paper'
},
{
    cat: 'IMPORTANT DATES',
    subcat: [],
    link: '/zones'
},
{
    cat: 'TEST CNETRES',
    subcat: [],
    link: '/test-centers'
},
{
    cat: 'PROCEDURE FOR REGISTRATION',
    subcat: [],
    link: '/procedure'
},
{
    cat: 'NEWS-RESULT',
    subcat: [],
    link: '/news'
},
{
    cat: 'TERMS & CONDITIONS',
    subcat: [],
    link: '/terms'
},
{
    cat: 'OUR COURSES',
    subcat: [{
        name: 'SUMMIT BATCH (FOR Class-8)',
        link: '/courses/8'
    }, {
        name: 'ACME BATCH (FOR Class-9) ',
        link: '/courses/9'
    }, {
        name: 'APOGEE BATCH (FOR Class-10) ',
        link: '/courses/10'
    }, {
        name: 'APEX BATCH (FOR Class-11)',
        link: '/courses/11'
    }, {
        name: 'CREST BATCH (FOR Class-12) ',
        link: '/courses/12'
    }, {
        name: 'ZENITH BATCH (FOR 12th Pass Students)',
        link: '/courses/13'
    }]
},
{
    cat: 'REWARD & SHCOLARSHIP',
    subcat: [],
    link: '/rewards'
},
{
    cat: 'ADMIT CARD',
    subcat: [],
    link: '/admit-card'
}];

const urlObj = {
    'HOME': 'home',
    'ELIGIBILITY': 'eligiblity',
    'SYLLABUS': 'SYLLABUS',
    'SAMPLE PAPER': 'SAMPLE_PAPER',
    'IMPORTANT DATES': 'IMPORTANT_DATES',
    'TEST CNETRES': 'TEST_CNETRES',
    'PROCEDURE FOR REGISTRATION': 'PROCEDURE',
    'NEWS-RESULT': 'NEWS_RESULT',
    'TERMS & CONDITIONS': 'TERMS',
    'OUR COURSES': 'COURSES',
    'REWARD & SHCOLARSHIP': 'REWARD',
    'ADMIT CARD': 'ADMIT'
};

const Navbar = (props) => {
    const [activeFlag, setActiveFlag] = useState({
        home: true,
        eligiblity: false,
        SYLLABUS: false,
        SAMPLE_PAPER: false,
        IMPORTANT_DATES: false,
        TEST_CNETRES: false,
        PROCEDURE: false,
        NEWS_RESULT: false,
        TERMS: false,
        COURSES: false,
        REWARD: false,
        ADMIT: false,
    });

    useEffect(() => {
        let url = window.location.pathname;
        console.log(url);
        if (url === ('/')) {
            setActiveFlag({
                home: true,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('/eligiblity')) {
            setActiveFlag({
                home: false,
                eligiblity: true,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('syllabus')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: true,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('/sample-paper')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: true,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('zones')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: true,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('test-centers')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: true,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('procedure')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: true,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('news')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: true,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('terms')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: true,
                COURSES: false,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('courses')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: true,
                REWARD: false,
                ADMIT: false,
            });
        }
        else if (url.includes('rewards')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: true,
                ADMIT: false,
            });
        }
        else if (url.includes('admit-card')) {
            setActiveFlag({
                home: false,
                eligiblity: false,
                SYLLABUS: false,
                SAMPLE_PAPER: false,
                IMPORTANT_DATES: false,
                TEST_CNETRES: false,
                PROCEDURE: false,
                NEWS_RESULT: false,
                TERMS: false,
                COURSES: false,
                REWARD: false,
                ADMIT: true,
            });
        }
    }, [props.flag]);

    function openNav() {
        document.getElementById("mySidenav").style.width = "100%";
    }

    function closeNav() {
        console.log('sdfsdf');
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav1">
                    <div className="nav11">
                        <img src="/assets/images/LEft logo.jpeg" alt="" />
                    </div>
                    <div className="nav12">
                        <div className="nav121 me-2">
                            <img src="/assets/images/Logo middle.jpeg" alt="" />
                        </div>
                        <div className="nav121 ms-2">
                            <button className="btn btn-danger">Register Now</button>
                        </div>
                    </div>
                    <div className="nav13">
                        <img src="/assets/images/right.jpeg" alt="" />
                    </div>
                </div>
                <div className="nav2">
                    {navOp.map((e, index) => {
                        return (
                            <div key={index} className={activeFlag[urlObj[e.cat]] ? "nav21 nav-active" : "nav21"}>
                                <div className="dropdown">
                                    {e.subcat.length > 0 ? <>
                                        <button className="dropbtn">{e.cat}</button>
                                        <div className="dropdown-content">
                                            {e.subcat.map((f, index1) => {
                                                return (
                                                    <NavLink key={index1} to={f.link}>{f.name}</NavLink>
                                                )
                                            })}
                                        </div>
                                    </> : <NavLink className="navli" to={e.link}>{e.cat}</NavLink>}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id="mySidenav" className="sidenav">
                    <div className="closebtn" onClick={closeNav}>&times;</div>
                    <div className="sdi">
                        {navOp.map((e, index) => {
                            return (
                                <div key={index} className={activeFlag[urlObj[e.cat]] ? "nav21 nav-active" : "nav21"}>
                                    <div className="dropdown">
                                        {e.subcat.length > 0 ? <>
                                            <button className="dropbtn">{e.cat}</button>
                                            <div className="dropdown-content">
                                                {e.subcat.map((f, index1) => {
                                                    return (
                                                        <NavLink onClick={closeNav} key={index1} to={f.link}>{f.name}</NavLink>
                                                    )
                                                })}
                                            </div>
                                        </> : <NavLink onClick={closeNav} className="navli" to={e.link}>{e.cat}</NavLink>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="navbtn">
                    <svg onClick={openNav} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
            </nav>
            <div className="enq-btns">
                <button className="btn btn-warning me-1">Register Now</button>
                <button className="btn btn-primary ms-1">Post Enquiry</button>
            </div>
        </>
    )
}

export default Navbar;
