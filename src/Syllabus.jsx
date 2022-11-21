import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { syllabus } from "./SyllabusData";
import sylabusimage from "./assets/sylabus.jpg";

const Syllabus = (props) => {
  const { id } = useParams();

  let links = [
    {
      name: "Important date",
      url: "/zones",
    },
    {
      name: "Test Centers",
      url: "/test-centers",
    },
  ];

  let t = {
    7: {
      title: "For Class 7 Studying Students going to Class 8 in 2023",
      arrs: [
        {
          head: "MENTAL ABILITY",
          text: [
            "Alphabet Test",
            "Coding-Decoding",
            "Direction Sense",
            "Mirror Image",
            "Number Series",
            "Letter Series",
          ],
        },
        {
          head: "PHYSICS",
          text: ["Heat", "Motion & Time", "Electric Current and its effects"],
        },
        {
          head: "CHEMISTRY",
          text: [
            "Fibre to Fabric",
            "Acids, Bases and Salts",
            "Physical and Chemical Changes",
          ],
        },
        {
          head: "MATHEMATICS",
          text: [
            "Rational Number",
            "Integers, Fractions & Decimals",
            "Exponents and Powers",
            "Simple Equations",
            "Lines and Angles",
          ],
        },
        {
          head: "BIOLOGY",
          text: [
            "Nutrition in Plants",
            "Nutrition in Animals",
            "Respiration in Organisms",
            "Transportation in Plants and Animals",
          ],
        },
      ],
      para1: {
        head: "VE-GRE Paper Pattern: ",
        text: [
          "No. of Ques. = 100 (20 Single Correct Type Objective Ques. in Physics, Chemistry, Mathematics, Biology & Mental Ability Each)  ",
          "Paper Duration: 2 hrs.  |   Total Marks: 300 (Marking Scheme: +3, -1)",
        ],
      },
      para2: {
        head: "",
        text: ["", ""],
      },
    },
  };

  useEffect(() => {
    props.setFlag(!props.flag);
  }, []);

  const SamplePaperData = [
    {
      name: "(IIT) For Class–XIIth Pass students",
      link: "https://drive.google.com/file/d/10asW007iA_2VjdvinCrt0rHeXoq5kb59/view?usp=share_link",
    },
    // {
    //   name: "(IIT) For Class–XIIth Pass students(Hindi)",
    //   link: "https://drive.google.com/file/d/1Si5XmMO85l2zLp9PuFzsWpxoFRDQPlOC/view?usp=sharing",
    // },
    {
      name: "(Medical) For Class–XIIth Pass students",
      link: "https://drive.google.com/file/d/16f72z6Te2F8lKeLY7sxMmIESP5BpFVyS/view?usp=share_link",
    },

    // {
    //   name: "(Medical) For Class–XIIth Pass students(Hindi)",
    //   link: "https://drive.google.com/file/d/118V7soQIgLfg9aSNMjnsZ8PN0Q0QTUot/view?usp=sharing",
    // },
    {
      name: " IIT (11th studying students going to class 12 in 2023",
      link: "https://drive.google.com/file/d/1GQy4gxtdfk9JyELeAgQECC91K-6Yjq5d/view?usp=share_link",
    },
    // {
    //   name: " IIT (11th studying students going to class 12 in 2023(Hindi)",
    //   link: "https://drive.google.com/file/d/1mBCjwLpXBfsmtGTTg8o5HQW5djsS7OV2/view?usp=sharing",
    // },
    {
      name: " Medical (11th studying students going to class 12 in 2023",
      link: "https://drive.google.com/file/d/1dNM6DYYeLpoxU5Izv8_vKvpwlUYJTqRF/view?usp=share_link",
    },
    // {
    //   name: "  Medical (11th studying students going to class 12 in 2023(Hindi)",
    //   link: "https://drive.google.com/file/d/1w6deb-pl1ye0N7lgGkXxXbNuSZBws9Ug/view?usp=sharing",
    // },
    //
    {
      name: "10th studying students going to class 11 in 2023",
      link: "https://drive.google.com/file/d/12E5GWSgyceeP0JWQ3G-F9IyGhKyyf2as/view?usp=share_link",
    },
    //
    // {
    //   name: "10th studying students going to class 11 in 2023(Hindi)",
    //   link: "https://drive.google.com/file/d/1yYF-0WMNfRZzqItg-7RYLXH2w5aWO8oO/view?usp=sharing",
    // },
    //
    {
      name: "9th studying students going to class 10 in 2023",
      link: "https://drive.google.com/file/d/1iY5bk-X0cTzrwmABbpaVRAskWWsf7Yic/view?usp=share_link",
    },
    // {
    //   name: "9th studying students going to class 10 in 2023(Hindi)",
    //   link: "https://drive.google.com/file/d/1pV4_8n3EeisgyHaG28J1tFuT7r2yeoe3/view?usp=sharing",
    // },
    {
      name: "8th studying students going to class 9 in 2023",
      link: "https://drive.google.com/file/d/1citk3FcVoCm3mVlFdf37AzaZmWKJdADA/view?usp=share_link",
    },
    // {
    //   name: "8th studying students going to class 9 in 2023(Hindi)",
    //   link: "https://drive.google.com/file/d/14TDwG5DfCZyo9qFS1nKTWGNb7g-lPsZU/view?usp=sharing",
    // },
    {
      name: "7th studying students going to class 8 in 2023",
      link: "https://drive.google.com/file/d/1NdwEM6-6kkM2nKQVcbQtSShJoVq70GPP/view?usp=share_link",
    },
    // {
    //   name: "7th studying students going to class 8 in 2023)(Hindi)",
    //   link: "https://drive.google.com/file/d/1AgyvXrk28ia0iQeI7km4UHgzHXT-bYKf/view?usp=sharing",
    // },
    //
  ];

  return (
    <div>
      <img
        src={sylabusimage}
        width="100%"
        height="250px"
        style={{ objectFit: "cover" }}
      />
      <div className="comm">
        {/* <div className="comm1">
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
        </div> */}
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
          <h4>SYLLABUS</h4>
          {/* <h2>{syllabus[id]?.title}</h2> */}
          {/* {syllabus[id].images.map((item) => (
            <img src={item} width="100%" style={{ objectFit: "contain" }} />
          ))} */}

          {/* <div className="syllabus">
            <h2>{syllabus[id]?.title}</h2>
            <div className="syllabus1">
              {syllabus[id]?.arrs.map((e, index) => {
                return (
                  <div key={index}>
                    <h5>{e?.head}</h5>
                    <ol>
                      {e?.text.map((f, index1) => {
                        return <li key={index1}>{f}</li>;
                      })}
                    </ol>
                  </div>
                );
              })}
            </div>
            <div className="syllabus2">
              <h5>{syllabus[id]?.para1.head}</h5>
              {syllabus[id]?.para1.text.map((e, index) => {
                return <p key={index}>{e}</p>;
              })}
              {syllabus[id]?.para2.head !== "" ? (
                <>
                  <h5>{syllabus[id]?.para2.head}</h5>
                  {syllabus[id]?.para2.text.map((e, index) => {
                    return <p key={index}>{e}</p>;
                  })}
                </>
              ) : null}
            </div>
          </div> */}

          <table className="table table-striped">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="table-head"
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                >
                  S No.
                </th>
                <th
                  scope="col"
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                >
                  Class
                </th>
                <th
                  scope="col"
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                >
                  {/* Question Paper with Key */}
                </th>
              </tr>
            </thead>
            <tbody>
              {SamplePaperData.map((item, key) => {
                return (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{item.name}</td>
                    {/* <Link to="/" style={{ height: "100%" }}> */}
                    <td
                      className="text-warning"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.location.href = item.link;
                      }}
                    >
                      Click to download
                    </td>
                    {/* </Link> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
