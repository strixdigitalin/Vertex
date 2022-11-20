import React from "react";
import { Link } from "react-router-dom";
import toTop from "./assets/scroll_to_top.png";
import { MightFaceError } from "./SyllabusData";
const Footer = () => {
  console.log(window.screen.width, "<<<width");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  return (
    <>
      {/* <footer
        className="foot"
        style={{
          position: "fixed",
          bottom: window.screen.width > 600 ? "50px" : "70px",
          height: window.screen.width > 600 ? "20px" : "80px",
          width: "100%",
          padding: "0px 1rem",
          paddingRight: "6rem",
        }}
      >
        <div className="foot1">
          <div className="foot11">
            Copyright@2022 Vertex Educations. All rights reserved{" "}
            <span>Terms </span>
          </div>
          <div
            className="foot12"
            onClick={() => {
              window.location.href = "https://www.strixdigital.in";
            }}
          >
            Designed & Developed by {MightFaceError}
          </div>
        </div>
      </footer> */}
      <footer
        className="foot2"
        style={{
          backgroundColor: "#01843E",
          color: "white",
          textAlign: "center",
          position: "fixed",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          // flexDirection: "row-reverse",
          // justifyContent: "space-between",
          textAlign: "center",
          // flexDirection: "row-reverse",
          bottom: "0px",
          // height: "70px",
          width: "100%",
        }}
      >
        {/* <footer
          className="foot"
          style={{
            // position: "fixed",
            // bottom: window.screen.width > 600 ? "50px" : "70px",
            // height: window.screen.width > 600 ? "20px" : "80px",
            width: "100%",
            // padding: "0px 1rem",
            // paddingRight: "6rem",
          }}
        >
          <div className="foot1">
            <div className="foot11">
              Copyright@2022 Vertex Educations. All rights reserved{" "}
              <span>Terms </span>
            </div>
            <div
              className="foot12"
              onClick={() => {
                window.location.href = "https://www.strixdigital.in";
              }}
            >
              Designed & Developed by {MightFaceError}
            </div>
          </div>
        </footer> */}
        {/* <div className="foot12" style={{ background: "#01843" }}> */}
        {/* <div className="foot112" style={{ background: "#01843" }}> */}
        <div className="blackFooter">
          <div style={{ width: "80%", margin: "auto" }}>
            {" "}
            Copyright@2022 Vertex Educations. All rights reserved{" "}
            <span style={{ marginLeft: "10px" }}>
              Visitors Count{" "}
              <a href="https://www.hitwebcounter.com" target="_blank">
                <img
                  src="https://hitwebcounter.com/counter/counter.php?page=8069903&style=0006&nbdigits=6&type=page&initCount=0"
                  title="Free Counter"
                  Alt="web counter"
                  width="70px"
                  border="0"
                />
              </a>
            </span>
          </div>
          <div className="blackFooterTerms">
            <div className="singleTerm">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/payment-terms"
              >
                Terms & Condition
              </Link>
            </div>
            <div className="singleTerm">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/privacy-policy-payment"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="singleTerm">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/refund-collection"
              >
                Refund /Collection Policy
              </Link>
            </div>
            <div className="singleTerm">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          Get upto free education with Free Lodging and Free Food
          <Link to="/register-now">
            <button
              // className="btn btn-danger"
              className="registerbtn "
              onClick={scrollToTop}
            >
              Register Now
            </button>
          </Link>
        </div>
        <div
          onClick={scrollToTop}
          style={{
            cursor: "pointer",
            position: "absolute",
            bottom: "2px",
            right: "10px",
          }}
        >
          <img src={toTop} width="50px" />
        </div>

        {/* </div> */}
        {/* </div> */}
      </footer>
    </>
  );
};

export default Footer;
