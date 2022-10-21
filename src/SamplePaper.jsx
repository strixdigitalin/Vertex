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

  const SamplePaperData = [
    {
      name: "(IIT) For Class–XIIth Pass students(English)",
      link: "https://drive.google.com/file/d/1e4a6vJAyUF2WCU9-BtdEqWalq8FrkJDu/view?usp=sharing",
    },
    {
      name: "(IIT) For Class–XIIth Pass students(Hindi)",
      link: "https://drive.google.com/file/d/1Si5XmMO85l2zLp9PuFzsWpxoFRDQPlOC/view?usp=sharing",
    },
    {
      name: "(Medical) For Class–XIIth Pass students(English)",
      link: "https://drive.google.com/file/d/1kOzodkRkcqjnksxEXehTyyivZD0ifu10/view?usp=sharing",
    },

    {
      name: "(Medical) For Class–XIIth Pass students(Hindi)",
      link: "https://drive.google.com/file/d/118V7soQIgLfg9aSNMjnsZ8PN0Q0QTUot/view?usp=sharing",
    },
    {
      name: " IIT (11th studying students going to class 12 in 2023)(English)",
      link: "https://drive.google.com/file/d/1Jfu71MtFcazUxeTp_LJKFAdlGt_IwKbi/view?usp=sharing",
    },
    {
      name: " IIT (11th studying students going to class 12 in 2023)(Hindi)",
      link: "https://drive.google.com/file/d/1mBCjwLpXBfsmtGTTg8o5HQW5djsS7OV2/view?usp=sharing",
    },
    {
      name: " Medical (11th studying students going to class 12 in 2023)(English)",
      link: "https://drive.google.com/file/d/1_NY9JTC5oZIcwZ52Ra1KZcg67LkIW-lN/view?usp=sharing",
    },
    {
      name: "  Medical (11th studying students going to class 12 in 2023)(Hindi)",
      link: "https://drive.google.com/file/d/1w6deb-pl1ye0N7lgGkXxXbNuSZBws9Ug/view?usp=sharing",
    },
    //
    {
      name: "10th studying students going to class 11 in 2023)(English)",
      link: " https://drive.google.com/file/d/1pLhLFRskOV5tRd253LTz-ddYtgGiq3Pf/view?usp=sharing",
    },
    //
    {
      name: "10th studying students going to class 11 in 2023)(Hindi)",
      link: "https://drive.google.com/file/d/1yYF-0WMNfRZzqItg-7RYLXH2w5aWO8oO/view?usp=sharing",
    },
    //
    {
      name: "9th studying students going to class 10 in 2023)(English)",
      link: "https://drive.google.com/file/d/12b56LsNvwBUoTIRb2nRmVEVGiCHnZlxT/view?usp=sharing",
    },
    {
      name: "9th studying students going to class 10 in 2023)(Hindi)",
      link: "https://drive.google.com/file/d/1pV4_8n3EeisgyHaG28J1tFuT7r2yeoe3/view?usp=sharing",
    },
    {
      name: "8th studying students going to class 9 in 2023)(English)",
      link: "https://drive.google.com/file/d/1x9smQTUaSc0tBf0uknDnXF45eSs35q5p/view?usp=sharing",
    },
    {
      name: "8th studying students going to class 9 in 2023)(Hindi)",
      link: "https://drive.google.com/file/d/14TDwG5DfCZyo9qFS1nKTWGNb7g-lPsZU/view?usp=sharing",
    },
    {
      name: "7th studying students going to class 8 in ",
      link: "https://drive.google.com/file/d/1ABznZRFTwazn_DIWne9XnCoarGgFYxJi/view?usp=sharing",
    },
    //
  ];

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
