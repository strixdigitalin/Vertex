import React from "react";
import toTop from "./assets/scroll_to_top.png";
const Footer = () => {
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
      <footer className="foot">
        <div className="foot1">
          <div className="foot11">
            Copyright@2022 Vertex Educations. All rights reserved
          </div>
          <div className="foot12">
            Designed & Developed by Vertex Educations.
          </div>
        </div>
      </footer>
      <footer
        className="foot2"
        style={{
          backgroundColor: "#01843E",
          color: "white",
          textAlign: "center",
          position: "fixed",
          display: "flex",
          // flexDirection: "row-reverse",
          // justifyContent: "space-between",
          textAlign: "center",
          // flexDirection: "row-reverse",
          bottom: "0px",
          height: "70px",
          width: "100%",
        }}
      >
        {/* <div className="foot12" style={{ background: "#01843" }}> */}
        {/* <div className="foot112" style={{ background: "#01843" }}> */}

        <div style={{ width: "100%" }}>
          Get upto free education with Free Lodging and Free Food
          <button
            // className="btn btn-danger"
            className="registerbtn "
            onClick={scrollToTop}
          >
            Register Now
          </button>
        </div>
        <div
          onClick={scrollToTop}
          style={{
            cursor: "pointer",
            position: "absolute",
            bottom: "10px",
            right: "10px",
          }}
        >
          <img src={toTop} width="80px" />
        </div>

        {/* </div> */}
        {/* </div> */}
      </footer>
    </>
  );
};

export default Footer;
