import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import exam from "./assets/exam.jpg";
import ReactDOMServer from "react-dom/server";
import html2pdf from "html2pdf.js/dist/html2pdf.min";

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
  const showValue = (value) => {
    return <span style={{ fontWeight: 500, marginLeft: "1rem" }}>{value}</span>;
  };

  const paymentData = (
    <>
      <div className="payment-success">
        <span style={{ textAlign: "center" }}>
          {" "}
          <h4>Payment Successful</h4>
          <h5 style={{ marginTop: "10px" }}>
            You have successfully regisered to Ve-Gre
          </h5>
        </span>
        <div style={{ width: "80%", margin: "auto", marginTop: "40px" }}>
          <span style={{ fontWeight: "bold" }}>
            Student Name: {showValue(params.name)}
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            Date of birth {showValue(params.dob)}
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            Total Amount: Rs {showValue(params.amount)} Only
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            Order ID: {showValue(params.orderId)}
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            Razorpay Order id: {showValue(params.razorpayOrderId)}
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            Razorpay Payment id: {showValue(params.razorpayPaymentId)}
          </span>
          <br />
          <span style={{ fontWeight: "bold" }}>
            Time: {showValue(params.time)}
          </span>
        </div>
      </div>
    </>
  );

  const pdfJSX = () => {
    return (
      <div style={{ margin: "20px 20px" }}>
        {
          <div className="payment-success1">
            <span style={{ textAlign: "center" }}>
              {" "}
              <h4>Payment Successful</h4>
              <h5 style={{ marginTop: "10px" }}>
                You have successfully regisered to Ve-Gre
              </h5>
            </span>
            <div style={{ width: "80%", margin: "auto", marginTop: "40px" }}>
              <span style={{ fontWeight: "bold" }}>
                Student Name: {showValue(params.name)}
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>
                Date of birth {showValue(params.dob)}
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>
                {/* Total Amount: Rs {showValue(params.amount)} Only */}
                Total Amount: Rs 200 Only.
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>
                Order ID: {showValue(params.orderId)}
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>
                Razorpay Order id: {showValue(params.razorpayOrderId)}
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>
                Razorpay Payment id: {showValue(params.razorpayPaymentId)}
              </span>
              <br />
              <span style={{ fontWeight: "bold" }}>
                Time: {showValue(params.time)}
              </span>
            </div>
          </div>
        }
      </div>
    );
  };

  const printHandler = () => {
    // setSelectedStudent(item);

    const printElement = ReactDOMServer.renderToString(pdfJSX());
    console.log(printElement);

    html2pdf().from(printElement).save("Ve-gre payment receipt");
  };

  return (
    <div style={{ marginBottom: "15rem" }}>
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

      <div style={{ width: "100%", textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "#7B0100",
            color: "white",
            padding: "5px 10px",
            width: "150px",
            margin: "auto",
            marginTop: "20px",
            alignSelf: "center",
            borderRadius: "10px",
          }}
          onClick={() => {
            printHandler();
            // window.location.href = "/admit-card";
          }}
        >
          Download Receipt
        </button>
      </div>
      {paymentData}
    </div>
  );
};

export default PaymentSuccess;
