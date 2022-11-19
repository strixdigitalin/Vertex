import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import logofile from "./assets/logo.jpg";
import { useState } from "react";
import { fetchAdmitCardDetails } from "./APi";
const AdmitCard = (props) => {
  let links = [
    {
      name: "Sample Papers",
      url: "/sample-paper",
    },
    {
      name: "Important Dates",
      url: "/zones",
    },
    {
      name: "Test Centers",
      url: "/test-centers",
    },
  ];
  const [formData, setFormData] = useState({
    Student_No: "",
  });
  const [selectedStudent, setSelectedStudent] = useState({});

  const [getStudentsData, setGetStudentsData] = useState([]);

  useEffect(() => {
    props.setFlag(!props.flag);
  }, []);

  const headingLine = (item) => {
    return <span className="admitcardfield colbr">{item}</span>;
  };
  const fieldLine = (item) => {
    return <span className="admitcardfield ">{item}</span>;
  };
  const fieldResponse = (item) => {
    return <span className="fieldresponse">{item}</span>;
  };
  const sigNature = (item) => {
    return (
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        <div
          style={{ backgroundColor: "white", height: "40px", width: "200px" }}
        ></div>
        {item}
      </div>
    );
  };
  const instructionLine = (item) => (
    <span style={{ fontSize: "12px" }}>{item}</span>
  );

  const ImportantInstructions = () => {
    return (
      <div style={{ fontWeight: "600" }}>
        <div>{headingLine("IMPORTANT INSTRUCTIONS FOR VE-GRE")}</div>
        <div>
          *{" "}
          {instructionLine(
            "For the VE-GRE reach the test centre at least 30 min before test time."
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "Please ensure that your latest passport size, colour photograph is pasted on the Admit Card at the place provided before appearing for the test (Your photograph should not be more than 6 months old)"
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "Admit Card along with Photo Identity proof should be carried to the Test Centre at the time of the test. (Aadhar or School I.D.)"
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "An authorized person will verify and authenticate your Admit Card against the photo-id on the day of the test."
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "Cell phones, calculators, watch calculators, alarm clocks, digital watches with built in calculators/ memory or any electronic or smart devices are not allowed in the test hall. "
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "Candidates will not be allowed to leave the test hall till the test is completed. After submission of the test, candidate will not be allowed to re-enter the test hall"
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "Candidates are advised to locate allocated test center at least a day in advance to avoid any issue on the day of the test."
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "Travel and staying arrangements will need to be done by the candidates"
          )}
        </div>
        <div>
          *{" "}
          {instructionLine(
            "Please preserve this authenticated Admit Card for further processes."
          )}
        </div>
      </div>
    );
  };

  const SigNaturePart = ({ selectedStudent }) => {
    return (
      <>
        <div className="signaturediv mt3">
          {sigNature("Signature of Invigilator")}
          {sigNature("Signature of Counsellor")}
          {sigNature("Signature of Student")}
        </div>
      </>
    );
  };
  const StudentInput = () => {
    return (
      <div
        style={{
          width: "300px",
          // height: "300px",
          borderBottom: "1px solid #7B0100",
        }}
      ></div>
    );
  };
  const StudentDetails = ({ selectedStudent }) => {
    return (
      <>
        <div className="mt2">
          {fieldLine("Name of Student:")}{" "}
          {fieldResponse(selectedStudent?.Student_Name)}
        </div>
        <div className="mt1">
          {fieldLine("Father's Name:")}{" "}
          {fieldResponse(selectedStudent?.Father_name)}
        </div>
        {/* <div className="mt1">
          {fieldLine("Mother's Name:")} {fieldResponse("Akshay lakhera")}
        </div> */}
        <div className=" mt1">
          {fieldLine("Mobile No:")} {fieldResponse(selectedStudent?.Student_No)}
          <span style={{ marginLeft: "40px" }}>
            {fieldLine("Aadhar No")}
            {fieldResponse(selectedStudent?.Father_name)}
          </span>
        </div>
        <div className="mt1" style={{ display: "flex" }}>
          {headingLine("Presently studying in :")} <StudentInput />
          {/* {fieldResponse(selectedStudent)} */}
        </div>
        <div className="mt1">
          {headingLine("Test Center:")}{" "}
          {fieldResponse(selectedStudent?.TEST_CENTER)}
          <span style={{ marginLeft: "40px" }}>
            {headingLine("Test Date:")}{" "}
            {fieldResponse(selectedStudent?.TEST_DATE)}
          </span>
          <span style={{ marginLeft: "40px" }}>
            {headingLine("Test Time:")}{" "}
            {fieldResponse(selectedStudent?.TEST_TIME)}
          </span>
        </div>
      </>
    );
  };

  const pdfJSX = (selectedStudent) => {
    return (
      <div className="upper0">
        <div className="upper1">
          <div style={{ marginTop: "40px" }}>
            {headingLine("Registration No :")}{" "}
            {fieldResponse(selectedStudent?.Roll_No)}
          </div>
          <div>
            {" "}
            <img src={logofile} height="110px" width="130px" />
            <div className="admitheading">Admit Card</div>
          </div>
          <div>
            <div className="imagesection">
              <div className="phototext">
                Please prefix your recent coloured passport size photograph
              </div>
            </div>
          </div>
        </div>
        <StudentDetails selectedStudent={selectedStudent} />
        <SigNaturePart selectedStudent={selectedStudent} />

        {/* {headingLine("This form is to be filled in CAPITAL LETTERS")} */}

        {/* part 2 */}

        <div className="mt2">
          <ImportantInstructions />
        </div>

        <div style={{ border: "1px dashed red", marginTop: "20px" }}></div>
        {/* part 3 */}

        <div style={{ marginTop: "20px" }}>
          {headingLine("Registration No :")}{" "}
          {fieldResponse(selectedStudent.Roll_No)}
        </div>
        <StudentDetails selectedStudent={selectedStudent} />
      </div>
    );
  };

  const printHandler = (item) => {
    setSelectedStudent(item);

    const printElement = ReactDOMServer.renderToString(pdfJSX(item));
    console.log(printElement);

    html2pdf().from(printElement).save("Ve-gre Admit card");
  };

  const getStudents = () => {
    if (formData.Student_No.trim() == "")
      return alert("Please Enter Student Mobile Number");
    if (formData.Student_No.length != 10)
      return alert("Mobile number must be of 10 digit.");

    fetchAdmitCardDetails(formData, (res) => {
      console.log(res, "<<<Res at admit card");
      setGetStudentsData(res.data);
    });
  };

  const ShowStudents = ({ students }) => {
    return (
      <div
        style={{
          overflowX: "scroll",
        }}
      >
        <div className="showStudent">
          <div className="colwidth2" style={{ fontWeight: "bold" }}></div>
          <div className="colwidth1" style={{ fontWeight: "bold" }}>
            Student Name
          </div>
          <div className="colwidth1" style={{ fontWeight: "bold" }}>
            Father Name
          </div>
          <div className="colwidth1" style={{ fontWeight: "bold" }}>
            Aadhar No
          </div>
        </div>
        {students.map((item) => {
          return (
            <div className="showStudent">
              <div className="colwidth2">
                {" "}
                <button
                  className="downloadadmit"
                  onClick={() => {
                    printHandler(item);
                  }}
                >
                  Print{" "}
                </button>{" "}
              </div>
              <div className="colwidth1">{item.Student_Name}</div>
              <div className="colwidth1">{item.Father_name}</div>
              <div className="colwidth1">{item.AADHAR_NO}</div>
              {/* <div>
                {" "}
                <button
                  className="downloadadmit"
                  onClick={() => {
                    setSelectedStudent(item);
                  }}
                >
                  View{" "}
                </button>{" "}
              </div> */}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
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
          <h4>ADMIT CARD</h4>
          <div className="rollnoinput">
            <div>Enter Registered mobile number</div>

            <input
              placeholder="Student number provided during registration"
              value={formData.Student_No}
              onChange={(e) => {
                setFormData({ Student_No: e.target.value });
              }}
            />
            <button style={{ height: "100%" }} onClick={getStudents}>
              {" "}
              Go
            </button>
          </div>
          {getStudentsData.length != 0 && (
            <ShowStudents students={getStudentsData} />
          )}

          {/* {pdfJSX(selectedStudent)} */}
          {/* <h1 className="display-1">Coming Soon...</h1> */}
        </div>
      </div>
    </div>
  );
};

export default AdmitCard;
