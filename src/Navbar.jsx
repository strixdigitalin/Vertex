import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logofile from "./assets/logo.jpg";
import { sendEnquiry } from "./Payment/APi/Users";

const navOp = [
  {
    cat: "HOME",
    subcat: [],
    link: "/",
  },
  {
    cat: "Why VEGRE",
    subcat: [],
    link: "/why-vegre",
  },
  {
    cat: "ELIGIBILITY",
    subcat: [],
    link: "/eligiblity",
  },
  {
    cat: "SYLLABUS",
    subcat: [
      {
        name: "(IIT) For Class–XII Pass students",
        link: "/syllabus/7",
      },
      {
        name: "(Medical) For Class–XII Pass Students",
        link: "/syllabus/8",
      },
      {
        name: "IIT (11th studying students going to class 12 in 2023)",
        link: "/syllabus/12",
      },
      {
        name: "Medical (11th studying students going to class 12 in 2023)",
        link: "/syllabus/13",
      },
      {
        name: "10th studying students going to class 11 in 2023",
        link: "/syllabus/10",
      },
      {
        name: "9th studying students going to class 10 in 2023",
        link: "/syllabus/11",
      },
      {
        name: "8th studying students going to class 9 in 2023",
        link: "/syllabus/9",
      },

      {
        name: "7th studying students going to class 8 in 2023",
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
  // {
  //   cat: "NEWS",
  //   subcat: [{ name: "Result", link: "/news" }],
  //   link: "/news",
  // },
  {
    cat: "TERMS & CONDITIONS",
    subcat: [],
    link: "/terms",
  },
  {
    cat: "OUR COURSES",
    subcat: [
      {
        name: "FOR 12th Pass Students (ZENITH)",
        link: "/courses/13",
      },
      {
        name: "FOR Class-12 (CREST)",
        link: "/courses/12",
      },

      // {
      //   name: "FOR Class-11",
      //   link: "/courses/11",
      // },
      {
        name: "FOR Class-11 (APEX)",
        link: "/courses/11",
      },
      {
        name: "FOR Class-10 (APOGEE)",
        link: "/courses/10",
      },
      {
        name: "FOR Class-9 (ACME)",
        link: "/courses/9",
      },
      {
        name: "FOR Class-8 (SUMMIT)",
        link: "/courses/8",
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
  "Why Ve-Gre": "whyVegre",
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
    whyVegre: false,
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
  const [enquiry, setEnquiry] = useState({});

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

  const sendEnquirySubmit = () => {
    sendEnquiry(enquiry, (res) => {
      alert(res.msg);
      setEnquiry({});
      window.location.reload(true);
      // /*);
    });
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
    } else if (url.includes("/why-vegre")) {
      setActiveFlag({
        home: false,
        whyVegre: true,
        eligiblity: false,
        SYLLABUS: false,
        SAMPLE_PAPER: false,
        IMPORTANT_DATES: false,
        TEST_CNETRES: false,
        PROCEDURE: false,
        // NEWS_RESULT: false,
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
          <div style={{ width: "100%" }}>
            Phone:
            <span style={{ marginLeft: "10px" }}>
              <a
                href="tel:+919031011931"
                style={{ color: "yellow", textDecoration: "none" }}
              >
                +91 90310 11931
              </a>
              ,{" "}
              <a
                href="tel:+919031011932"
                style={{ color: "yellow", textDecoration: "none" }}
              >
                +91 9031011932,
              </a>{" "}
            </span>
          </div>
        </div>
        <div>
          <span>
            Email:{"  "}{" "}
            <a
              href="mailto:infovertexedu@gmail.com"
              style={{
                color: "yellow",
                textDecoration: "none",
                marginLeft: "10px",
              }}
            >
              {" "}
              infovertexedu@gmail.com
            </a>
          </span>
        </div>

        {/* <div>
          <Link
            to="/why-vegre"
            style={{ textDecoration: "none", color: "yellow" }}
          >
            Why VE-GRE ?
          </Link>
        </div> */}
      </div>

      <nav className="navbar">
        <div className="nav1">
          <div className="nav11">
            {/* <img src="/assets/images/LEft logo.jpeg" alt="" /> */}
            <img
              src={logofile}
              alt=""
              height="70px"
              width="100px"
              style={
                {
                  // objectFit: "contain",
                }
              }
            />
            {/* <img src= alt="" /> */}
          </div>
          <div className="nav12">
            <div className="nav121 me-2">
              <img src="/assets/images/Logo middle.jpeg" alt="" />
            </div>
            <div className="nav121 reg ms-2">
              <Link to="/register-now">
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
              </Link>
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
          <Link to="/register-now" style={{ textDecoration: "none" }}>
            <button
              // className="btn btn-danger"

              className="registerbtn reg-mob"
            >
              Register Now
            </button>
          </Link>
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
        <Link to="/register-now">
          <button className="btn btn-warning me-1 registerbtnright">
            Register Now
          </button>
        </Link>
        <button
          className="btn btn-primary ms-1 registerbtnright"
          // style={{display}}
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
          <input
            value={enquiry.name}
            placeholder="Name"
            onChange={(e) => {
              setEnquiry({ ...enquiry, name: e.target.value });
            }}
          />
          {/* <br /> */}
          <input
            value={enquiry.mobile}
            placeholder="Mobile"
            onChange={(e) => {
              setEnquiry({ ...enquiry, mobile: e.target.value });
            }}
          />
          {/* <br /> */}
          <input
            placeholder="Email"
            value={enquiry.email}
            onChange={(e) => {
              setEnquiry({ ...enquiry, email: e.target.value });
            }}
          />
          {/* <br /> */}
          <input
            placeholder="Message"
            value={enquiry.message}
            onChange={(e) => {
              setEnquiry({ ...enquiry, message: e.target.value });
            }}
          />
          <br />
          <button
            style={{
              color: "white",
              background: "#7B0100",
              borderRadius: "15px",
              padding: " 5px 10px",
              width: "120px",
            }}
            onClick={sendEnquirySubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
