import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  paymentDAta,
  paymentRefund,
  PaymnetTermsAndCondition,
} from "./PaymentData";
import { termsData } from "./TermsData";

const PaymentRefund = (props) => {
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
          <h4>Refund Collection Policy</h4>
          <div className="terms">
            {/* <h2>Terms & Condition</h2> */}
            <div className="terms1">
              <h5 className="text-center text-decoration-underline mb-5">
                {/* TERMS & CONDITIONS */}
              </h5>
              {paymentRefund.map((e, index) => {
                return (
                  <div key={index} className="tt mb-4">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRefund;
