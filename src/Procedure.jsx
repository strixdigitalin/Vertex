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
        <div className="comm2" style={{ fontSize: "20px" }}>
          <h4>PROCEDURE FOR REGISTRATION </h4>
          <h3 style={{ textAlign: "end" }}>
            <a
              style={{ color: "blue", textDecoration: "underline" }}
              href="https://drive.google.com/file/d/1RVoxTtur6mLkcgN1fL6lVpVhJ91EI0K3/view?usp=sharing"
            >
              <em> Download Registration Form</em>
            </a>
          </h3>
          <p>
            OFFLINE REGISTRATION <br /> 1. Please collect Registration form from
            office of Vertex Educations, Patna or from office of Dainik jagaran.
            You can also download the registration form from our website
            www.vegre.in
            <br />
            2. Fill the Registration form carefully and completely.
            <br />
            3. Attach the following documents with the filled registration form
            <br />
            (a) Four recent coloured passport size photographs. <br />
            (b) Aadhaar Card. <br />
            (c) Photocopy of School photo ID or photocopy of school diary page
            on which your photo is pasted or Admit Card (having your photograph)
            of the last attended School or of Board Exam or Registration proof
            of Board.
            <br /> 4. REGISTRATION FEE: Registration Fee is Rs 200 Registration
            Fee is to be paid in Cash at Office of vertex educations, patna if
            you are submitting the "Registration form in person". You can pay it
            online through any mode of online payment.
            <br />
            5. Submit the filled registration form with the above mentioned
            attachments and registration fee in person at VERTEX EDUCATIONS
            PATNA
            <br />
            <br />
            <br />
            ONLINE REGISTRATION <br />
            1. Please log on to our website www.vegre.in <br /> 2. Click on
            registration Link and fill the personal details and academic details
            carefully and completely. <br />
            3. REGISTRATION FEE is rs 200
            <br /> 4. After successful transaction you will receive unique USER
            ID and Password at your registered email id and registered mobile
            number. Please remember this unique USER ID and Password for all
            future purposes like Admit Card download, knowing your results etc.
          </p>
          {/* <p>
            <span style={{ color: "red" }}>HOW TO APPLY:</span>
            <ul>
              <li>
                APPLY ONLINE ON {"  "}
                <a
                  target="_blank"
                  style={{ fontWeight: "bold" }}
                  href="https://www.vegre.com"
                >
                  <em style={{ color: "blue" }}>www.vegre.in</em>
                </a>
              </li>
              <li>
                GET OFFLINE REGISTRATION FORM FROM OUR CORPORATE OFFICE:
                <br />
                <em style={{ fontSize: "30px" }}>
                  First Floor, AMS park, Behind Hira Panna Jewellers, 
                  <br/>
                  Boring
                  Road Crossing, Patna- 800001.
                </em>
              </li>
            </ul>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Procedure;
