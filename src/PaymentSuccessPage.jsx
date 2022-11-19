import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import exam from "./assets/exam.jpg";

const PaymentSuccess = (props) => {
  const params = useParams();
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
      {/* <img
        src={exam}
        width="100%"
        height="250px"
        style={{ objectFit: "cover" }}
      /> */}
      {/* <div className="comm">
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
        <div className="comm2"></div>
      </div> */}
      <div className="payment-success">
        <h4>Payment Successful</h4>
        <h5 style={{ marginTop: "10px" }}>
          You have successfully regisered to Ve-Gre
        </h5>
        <div style={{ marginTop: "20px" }}>
          <span style={{ fontWeight: "bold" }}>Order ID: {params.orderId}</span>
        </div>
        <button
          style={{
            backgroundColor: "#7B0100",
            color: "white",
            padding: "5px 10px",
            marginTop: "20px",
            borderRadius: "10px",
            width: "150px",
          }}
          onClick={() => {
            window.location.href = "/admit-card";
          }}
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
