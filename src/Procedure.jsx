import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import procedure from "./assets/procedure.png";
const Procedure = (props) => {
  let links = [
    {
      name: "Sample Papers",
      url: "/sample-paper",
    },
    {
      name: "Important dates",
      url: "/zones",
    },
    {
      name: "Test Centers",
      url: "/test-centers",
    },
  ];

  useEffect(() => {
    props.setFlag(!props.flag);
  }, []);

  return (
    <div>
      <img
        src={procedure}
        width="100%"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <div className="comm">
        <div className="comm1">
          <div className="comm11">
            <h4>Quick Links</h4>
          </div>
          <div className="comm12">
            {links.map((e, index) => {
              return (
                <div key={index} className="comm121">
                  <NavLink to={e.url}>{e.name}</NavLink>
                </div>
              );
            })}
          </div>
        </div>
        <div className="comm2">
          <h4>PROCEDURE FOR REGISTRATION</h4>
          <p>
            HOW TO APPLY:
            <ul>
              <li>
                APPLY ONLINE ON {"  "}
                <a
                  target="_blank"
                  style={{ fontWeight: "bold" }}
                  href="https://www.vegre.com"
                >
                  <em>www.vegre.com</em>
                </a>
              </li>
            </ul>
            GET OFFLINE REGISTRATION FORM FROM OUR CORPORATE OFFICE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
