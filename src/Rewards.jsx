import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Rewards = (props) => {
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
          <div className="rewards">
            <h4>REWARDS & SCHOLARSHIPS</h4>
            <div className="rewards1">
              <div className="rewards11">
                <ul>
                  <li>
                    Upto 50 students: Free lodging; fooding; 100% free study
                  </li>
                  <li>
                    Upto 100 students(50 girls and 50 boys): 100% free education{" "}
                  </li>
                  <li>
                    Upto 200 students (100 girls and 100 boys):100% scholarship
                    on Tuition fee
                  </li>
                  <li>
                    10% additional discount for girls candidate; child of army
                    personal and teachers.
                  </li>
                </ul>
              </div>
              <div className="rewards12">
                <h5>Cash Rewards</h5>
                <h3>State Rank</h3>
                <b>10th & 11th</b>
                <ul>
                  <li>Rank 1: Rs. 21K</li>
                  <li>Rank 2: Rs. 15K</li>
                  <li>Rank 3: Rs. 11K</li>
                  <li>Rank 4: Rs. 5K</li>
                  <li>Rank 5: Rs. 5K</li>
                  <li>Rank 6-10: Rs. 2100 each</li>
                </ul>
                <b>Other Class</b>
                <ul>
                  <li>Rank 1: Rs. 11K</li>
                  <li>Rank 2: Rs. 5100</li>
                  <li>Rank 3: Rs. 3100</li>
                  <li>Rank 4: Rs. 2100</li>
                  <li>Rank 5: Rs. 2100</li>
                </ul>
                <b>District Topper (Only 11th & 12th)</b>
                <ul>
                  <li>Rank 1: Rs. 3100</li>
                  <li>Rank 2: Rs. 2100</li>
                  <li>Rank 3: Rs. 1100</li>
                </ul>
                <div>
                  <b>For 25 districts, total liability=1.575Lac</b>
                </div>
                <b></b>
              </div>
            </div>
          </div>
          <em style={{ color: "green", textDecoration: "underline" }}>
            Topper of good schools will get waiver on registration fee on the
            recommendations of school principal.
          </em>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
