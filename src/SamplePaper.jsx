import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const SamplePaper = (props) => {
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
          <h4>SAMPLE PAPER</h4>
          <div className="sample">
            {/* <h2 className="mb-3">VE-GRE Sample Paper</h2> */}
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
                    Question Paper with Key
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>(English) ACME – Class–IX (8th Studying Students)</td>
                  {/* <Link to="/" style={{ height: "100%" }}> */}
                  <td
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/1L5YlUQLpIJu_Hgr8BYAfKRLg3VZ2shz9/view?usp=sharing";
                    }}
                  >
                    Click to download
                  </td>
                  {/* </Link> */}
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    (Hindi) (English) ACME – Class–IX (8th Studying Students)
                  </td>
                  <td
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/1Wv5wjMda5zO5CNySmQicl45yEPj_aKb6/view?usp=sharing";
                    }}
                  >
                    Click to download
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    (English)(English) APEX – Class–XI (10th Studying Students)
                  </td>
                  <td
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/1242Xk2AhS3yBgMXdUUcHxBUTsLTkuJ2J/view?usp=sharing";
                    }}
                  >
                    Click to download
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    (Hindi)(English) APEX – Class–XI (10th Studying Students)
                  </td>
                  <td
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/16STNuqFpQUJ09Rt7Xn641JJ9PJzcuxh0/view?usp=sharing";
                    }}
                  >
                    Click to download
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>
                    {" "}
                    (English) (English) APOGEE– Class–X(9th Studying Students)
                  </td>
                  <td
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/1nn5Av549NChuNwxXEB_PoSnsrt26KtkU/view?usp=sharing";
                    }}
                  >
                    Click to download
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>
                    (Hindi)(English) APOGEE– Class–X(9th Studying Students)
                  </td>
                  <td
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/15KRXYpVQS_v1Miu2-7Vk7rdmZkpDuRQw/view?usp=sharing";
                    }}
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                  >
                    Click to download
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>
                    (English)(English) CREST – Class–XII IIT (11th Studying
                    Students)
                  </td>
                  <td
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/1OuoqXVsw3GioEtQxR4SZQu6KdeZiU1P0/view?usp=sharing";
                    }}
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                  >
                    Click to download
                  </td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>
                    (Hindi)(English) CREST – Class–XII IIT (11th Studying
                    Students)
                  </td>
                  <td
                    onClick={() => {
                      window.location.href =
                        "https://drive.google.com/file/d/1finQH2MiazTOaPvPPYRN8QpMaISA7WbJ/view?usp=sharing";
                    }}
                    className="text-warning"
                    style={{ cursor: "pointer" }}
                  >
                    Click to download
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <b className="text-danger mt-5">
              <em>
                *Note: Open a page of Coming Soon... on click of Click to
                download.
              </em>
            </b> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePaper;
