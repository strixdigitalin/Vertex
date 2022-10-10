import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { syllabus } from "./SyllabusData";
import sylabusimage from "./assets/sylabus.jpg";

const Syllabus = (props) => {
  const { id } = useParams();

  let links = [
    {
      name: "For Class 7 Studying Students going to Class 8 in 2023",
      url: "/syllabus/7",
    },
    {
      name: "For Class 8 Studying Students going to Class 9 in 2023",
      url: "/syllabus/8",
    },
    {
      name: "For Class 9 Studying Students going to Class 10 in 2023",
      url: "/syllabus/9",
    },
    {
      name: "For Class 10 Studying Students going to Class 11 in 2023",
      url: "/syllabus/10",
    },
    // {
    //   name: "For Class 10 Studying Students going to Class 11 in 2023",
    //   url: "/syllabus/11",
    // },
    {
      name: "For Class 11 Studying Students going to Class 12 [E] in 2023",
      url: "/syllabus/11",
    },
    {
      name: "For Class 11 Studying Students going to Class 12 [M] in 2023",
      url: "/syllabus/12",
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

  return (
    <div>
      <img
        src={sylabusimage}
        width="100%"
        height="250px"
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
          <h4>SYLLABUS</h4>
          <div className="syllabus">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Syllabus;
