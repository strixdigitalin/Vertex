import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logofile from "./assets/logo.svg";

const navOp = [
  {
    cat: "HOME",
    subcat: [],
    link: "/",
  },
  // {
  //   cat: "Why Ve-Gre",
  //   subcat: [],
  //   link: "/",
  // },
  {
    cat: "ELIGIBILITY",
    subcat: [],
    link: "/eligiblity",
  },
  {
    cat: "SYLLABUS",
    subcat: [
      {
        name: "ENITH – Class–XIIth PASS Students",
        link: "/syllabus/7",
      },
      {
        name: "ZENITH – Class–XIIth PASS Students",
        link: "/syllabus/8",
      },
      {
        name: "ACME – Class–IX (8th Studying Students)",
        link: "/syllabus/9",
      },
      {
        name: "APEX – Class–XI (10th Studying Students)",
        link: "/syllabus/10",
      },

      {
        name: "APOGEE– Class–X(9th Studying Students)",
        link: "/syllabus/11",
      },
      {
        name: "CREST – Class–XII IIT (11th Studying Students)",
        link: "/syllabus/12",
      },
      {
        name: "CREST – Class–XII Medical (11th Studying Students)",
        link: "/syllabus/13",
      },
      {
        name: "SUMMIT – Class–VIII(7th Studying Students)",
        link: "/syllabus/14",
      },
    ],
  },
  {
    cat: "SAMPLE PAPER",
    subcat: [],
    link: "/sample-paper",
  },
  {
    cat: "IMPORTANT DATES",
    subcat: [],
    link: "/zones",
  },
  {
    cat: "TEST CENTERS",
    subcat: [],
    link: "/test-centers",
  },
  {
    cat: "PROCEDURE FOR REGISTRATION",
    subcat: [],
    link: "/procedure",
  },
  {
    cat: "NEWS",
    subcat: [{ name: "Result", link: "/news" }],
    link: "/news",
  },
  {
    cat: "TERMS & CONDITIONS",
    subcat: [],
    link: "/terms",
  },
  {
    cat: "OUR COURSES",
    subcat: [
      {
        name: "SUMMIT BATCH (FOR Class-8)",
        link: "/courses/8",
      },
      {
        name: "ACME BATCH (FOR Class-9) ",
        link: "/courses/9",
      },
      {
        name: "APOGEE BATCH (FOR Class-10) ",
        link: "/courses/10",
      },
      {
        name: "APEX BATCH (FOR Class-11)",
        link: "/courses/11",
      },
      {
        name: "CREST BATCH (FOR Class-12) ",
        link: "/courses/12",
      },
      {
        name: "ZENITH BATCH (FOR 12th Pass Students)",
        link: "/courses/13",
      },
    ],
  },
  {
    cat: "REWARD & SHCOLARSHIP",
    subcat: [],
    link: "/rewards",
  },
  {
    cat: "ADMIT CARD",
    subcat: [],
    link: "/admit-card",
  },
];

const urlObj = {
  HOME: "home",
  ELIGIBILITY: "eligiblity",
  SYLLABUS: "SYLLABUS",
  "SAMPLE PAPER": "SAMPLE_PAPER",
  "IMPORTANT DATES": "IMPORTANT_DATES",
  "TEST CNETRES": "TEST_CNETRES",
  "PROCEDURE FOR REGISTRATION": "PROCEDURE",
  "NEWS-RESULT": "NEWS_RESULT",
  "TERMS & CONDITIONS": "TERMS",
  "OUR COURSES": "COURSES",
  "REWARD & SHCOLARSHIP": "REWARD",
  "ADMIT CARD": "ADMIT",
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

  const registerRef = useRef();
  const modlRef = useRef();
  const navtoggle = useRef();
  const [blikButtons, setBlikButtons] = useState(false);

  window.onclick = (e) => {
    console.log(e.target.className);
    if (e.target.className == "modal0") {
      modlRef.current.style.display = "none";
      navtoggle.current.style.display = "block";
    }
  };

  const onClickPostEnquiry = () => {
    modlRef.current.style.display = "block";
    navtoggle.current.style.display = "none";
  };

  useEffect(() => {
    setInterval(() => {
      setBlikButtons(!blikButtons);
    }, 1500);

    let url = window.location.pathname;
    console.log(url);
    if (url === "/") {
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
    } else if (url.includes("/eligiblity")) {
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
    } else if (url.includes("syllabus")) {
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
    } else if (url.includes("/sample-paper")) {
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
    } else if (url.includes("zones")) {
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
    } else if (url.includes("test-centers")) {
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
    } else if (url.includes("procedure")) {
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
    } else if (url.includes("news")) {
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
    } else if (url.includes("terms")) {
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
    } else if (url.includes("courses")) {
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
    } else if (url.includes("rewards")) {
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
    } else if (url.includes("admit-card")) {
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
    console.log("sdfsdf");
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
      <div className="top-header">
        <div style={{ display: "flex", gap: "2%" }} className="left-head">
          <div>
            Phone:
            <span style={{ marginLeft: "10px" }}>+91 90310 11932</span>
          </div>
          <div>
            <span>Email: infovertexedu@gmail.com</span>
          </div>
        </div>
        <div> Why VE-GRE ?</div>
      </div>

      <nav className="navbar">
        <div className="nav1">
          <div className="nav11">
            <img src="/assets/images/LEft logo.jpeg" alt="" />
            {/* <img src="/assets/dainiklogo.svg" alt="" /> */}
            {/* <img src= alt="" /> */}
          </div>
          <div className="nav12">
            <div className="nav121 me-2">
              <img src="/assets/images/Logo middle.jpeg" alt="" />
            </div>
            <div className="nav121 reg ms-2">
              <button
                // className="btn btn-danger"
                className="registerbtn "
                onClick={() => {
                  console.log(registerRef.current, "<<<registerref");
                  registerRef.current.style.color = "red";
                }}
                ref={registerRef}
              >
                Register Now
              </button>
            </div>
          </div>
          <div className="nav13">
            <img
              src="/assets/images/right.jpeg"
              alt=""
              width="60px"
              height="60px"
            />
          </div>
        </div>
        <div
          className="nav121-mob  ms-2"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            // className="btn btn-danger"

            className="registerbtn reg-mob"
          >
            Register Now
          </button>
        </div>
        <div className="nav2">
          {navOp.map((e, index) => {
            return (
              <div
                key={index}
                className={
                  activeFlag[urlObj[e.cat]] ? "nav21 nav-active" : "nav21"
                }
              >
                <div className="dropdown">
                  {e.subcat.length > 0 ? (
                    <>
                      <button className="dropbtn">{e.cat}</button>
                      <div className="dropdown-content">
                        {e.subcat.map((f, index1) => {
                          return (
                            <NavLink key={index1} to={f.link}>
                              {f.name}
                            </NavLink>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <NavLink className="navli" to={e.link}>
                      {e.cat}
                    </NavLink>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div id="mySidenav" className="sidenav">
          <div className="closebtn" onClick={closeNav}>
            &times;
          </div>
          <div className="sdi">
            {navOp.map((e, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeFlag[urlObj[e.cat]] ? "nav21 nav-active" : "nav21"
                  }
                >
                  <div className="dropdown">
                    {e.subcat.length > 0 ? (
                      <>
                        <button className="dropbtn">{e.cat}</button>
                        <div className="dropdown-content">
                          {e.subcat.map((f, index1) => {
                            return (
                              <NavLink
                                onClick={closeNav}
                                key={index1}
                                to={f.link}
                              >
                                {f.name}
                              </NavLink>
                            );
                          })}
                        </div>
                      </>
                    ) : (
                      <NavLink onClick={closeNav} className="navli" to={e.link}>
                        {e.cat}
                      </NavLink>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="navbtn" useRef={navtoggle}>
          <svg
            onClick={openNav}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </nav>
      <div className="enq-btns">
        <button className="btn btn-warning me-1 registerbtnright">
          Register Now
        </button>
        <button
          className="btn btn-primary ms-1 registerbtnright"
          onClick={onClickPostEnquiry}
        >
          Post Enquiry
        </button>
      </div>

      <div className="modal0" ref={modlRef}>
        <div className="modal1">
          <h4 style={{ color: "white" }}>Post Your Enquiry</h4>
          <p style={{ color: "white", padding: "5px 20px" }}>
            (Submit your details below and you will be contacted by our
            Executive)
          </p>
          <input placeholder="Name" />
          {/* <br /> */}
          <input placeholder="Mobile" />
          {/* <br /> */}
          <input placeholder="Email" />
          {/* <br /> */}
          <input placeholder="Message" />
          <br />
          <button
            style={{
              color: "white",
              background: "#7B0100",
              borderRadius: "15px",
              padding: " 5px 10px",
              width: "120px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
