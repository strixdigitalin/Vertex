import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Zone = (props) => {
  let links = [
    {
      name: "Sample Papers",
      url: "/sample-paper",
    },
    {
      name: "Zone",
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
      <div className="comm-table zone0 ">
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
        <div className="comm2" style={{ marginLeft: "0", margin: "auto" }}>
          <h4>IMPORTANT DATES</h4>
        </div>
        <div className="comm-table">
          <table className="table zones table-striped">
            <thead>
              <tr>
                <th
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                  scope="col"
                  className="width1"
                >
                  Zone
                </th>
                <th
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                  scope="col"
                  className="width2"
                >
                  District
                </th>
                <th
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                  scope="col"
                  className="width2"
                >
                  LAST DATE OF REGISTRATION{" "}
                </th>
                <th
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                  scope="col"
                  className="width2"
                >
                  TEST DATE
                </th>
                <th
                  style={{
                    background: "#ea6666",
                    color: "white",
                  }}
                  scope="col"
                  className="width2"
                >
                  RESULT DATE
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row" className="width1">
                  1
                </td>
                <td className="width3">
                  Sheohar, EastChamparan, Sitamarhi, Madhubani, Darbhanga,
                  Muzaffarpur, Samastipur, Patna, Hajipur, Ara, Buxar, Kaimur,
                  Rohtas, Arwal, Aurangabad, Jehanabad, Gaya, Nalanda, Nawada,
                  Saran, Begusarai, Godda, Dumka
                </td>
                <td className="width2">09-12-2022</td>
                <td className="width2">11-12-2022</td>
                <td className="width2">05-02-2023</td>
              </tr>
              <tr>
                <td className="width1" scope="row">
                  2
                </td>
                <td className="width3">
                  Gopalganj, Siwan, West Champaran, Supaul, Saharsha,
                  Lakhisarai, Munger, Bhagalpur, Jamui, Banka, Purnea, Katihar,
                  Kishanganj, Madhepura, Supaul, Araria, Khagaria, Patna,
                  Garhwa, Daltonganj
                </td>
                <td className="width2">13-01-2023</td>
                <td className="width2">15-01-2023</td>
                <td className="width2">05-02-2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Zone;
