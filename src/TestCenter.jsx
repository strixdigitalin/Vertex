import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import exam from "./assets/exam.jpg";

const TestCenter = (props) => {
  let links = [
    {
      name: "Sample Papers",
      url: "/sample-paper",
    },
    {
      name: "Important dates",
      url: "/zones",
    },
  ];

  useEffect(() => {
    props.setFlag(!props.flag);
  }, []);

  return (
    <div>
      <img
        src={exam}
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
          <h4>TEST CENTERS</h4>
          <h5 className="display-1"></h5>
          <h2>Districts</h2>
          <h5>
            Sheohar, EastChamparan, Sitamarhi, Madhubani, Darbhanga,
            Muzaffarpur, Samastipur, Patna, Hajipur, Ara, Buxar, Kaimur, Rohtas,
            Arwal, Aurangabad, Jehanabad, Gaya, Nalanda, Nawada, Saran,
            Begusarai, Godda, Dumka.
          </h5>
          <h5>
            Gopalganj, Siwan, West Champaran, Supaul, Saharsha, Lakhisarai,
            Munger, Bhagalpur, Jamui, Banka, Purnea, Katihar, Kishanganj,
            Madhepura, Supaul, Araria, Khagaria, Patna, Garhwa, Daltonganj
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TestCenter;
