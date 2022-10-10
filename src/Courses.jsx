import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { coursesData } from "./CoursesData";

const Courses = (props) => {
  let { id } = useParams();

  let links = [
    {
      name: "SUMMIT BATCH (FOR Class-8)",
      url: "/courses/8",
    },
    {
      name: "ACME BATCH (FOR Class-9) ",
      url: "/courses/9",
    },
    {
      name: "APOGEE BATCH (FOR Class-10) ",
      url: "/courses/10",
    },
    {
      name: "APEX BATCH (FOR Class-11)",
      url: "/courses/11",
    },
    {
      name: "CREST BATCH (FOR Class-12) ",
      url: "/courses/12",
    },
    {
      name: "ZENITH BATCH (FOR 12th Pass Students)",
      url: "/courses/13",
    },
  ];

  useEffect(() => {
    props.setFlag(!props.flag);
  }, []);

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
          <h4>OUR COURSES</h4>
          <div className="courses">
            <h3 className="courses-h3">{coursesData[id].head}</h3>
            <div className="courses1">
              <ul>
                {coursesData[id].text.map((e, index) => {
                  return <li key={index}>{e}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
