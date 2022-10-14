import React, { useState, useEffect } from "react";
import axios from "axios";

import PaymentButton from "./PaymentButton";
import { base_URL, getOrder } from "./Payment/APi/ORders";
import { RegisterUser } from "./Payment/APi/Users";

function RegisterNow() {
  const [formData, setFormData] = useState({});

  const [showBuy, setShowBuy] = useState(true);

  // Paymet
  const [values, setValues] = useState({
    amount: 0,
    orderId: "",
    error: "",
    success: false,
  });

  const { amount, orderId, success, error } = values;
  // useEffect(() => {
  //   createOrder();
  // }, []);

  const createOrder = () => {
    getOrder((response) => {
      console.log(response);
      if (response.error) {
        setValues({ ...values, error: response.error, success: false });
      } else {
        // alert(response.amount);
        setValues({
          ...values,
          error: "",
          success: true,
          orderId: response.id,
          amount: response.amount,
        });
      }
    });
  };

  // useEffect(() => {
  //   if (amount > 0 && orderId != "") {
  //     showRazoryPay();
  //   }
  // }, [amount]);

  const payDEtails = async () => {
    const payload = {
      "data-key": "rzp_test_Mu5DUXrPHI2u7b",
      "data-amount": 100,
      "data-name": "Strix Digital",
      "data-prefill.contact": 8989802546,
      "data-prefill.email": "email@gmail.com",
      "data-order_id": orderId,
      "data-prefill.name": "strix",
    };

    // window.location.href = "http://localhost:5000/";

    const { data } = await axios.post(`${base_URL}/payment/callback`, null, {
      params: payload,
    });
    console.log(data);
  };

  const showRazoryPay = () => {
    const form = document.createElement("form");
    form.setAttribute("action", `http://localhost:5000/api/payment/callback`);
    form.setAttribute("method", "POST");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.setAttribute("data-key", "rzp_test_Mu5DUXrPHI2u7b");
    script.setAttribute("data-amount", amount);
    script.setAttribute("data-name", "Clever Coder");
    script.setAttribute("data-prefill.contact", "9678452132");
    script.setAttribute("data-prefill.email", "abc@gmail.com");
    script.setAttribute("data-order_id", orderId);
    script.setAttribute("data-prefill.name", "Lalit Patel");
    // script.setAttribute("data-image", `http://localhost:5000/logo`);
    script.setAttribute("data-buttontext", "Proceed To Payment");
    let paymentbutton = document.getElementById("paymentbutton");
    paymentbutton.appendChild(form);
    form.appendChild(script);
    const input = document.createElement("input");
    input.type = "hidden";
    input.custom = "Hidden Element";
    input.name = "hidden";
    form.appendChild(input);
    setShowBuy(false);
  };

  // 0----------------------------------------

  // -------------

  // const showRazorPay2 = () => {};

  const onChange = (e) => {
    const { name, value } = e.target;
    console.log("label-->", name, "\t value-->", value);
    setFormData({ ...formData, [name]: value });
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function showRazorPay2() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.get("http://localhost:5000/api/createorder");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    console.log(result, "<<<result");

    // Getting the order details back
    const { amount, id, currency } = result.data;

    const options = {
      key: "rzp_test_Mu5DUXrPHI2u7b", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      // image: { logo },
      order_id: id,
      handler: async function (response) {
        const data = {
          orderCreationId: id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        console.log(data);
        const result = await axios.post(
          "http://localhost:5000/api/payment/callback",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Vertex Education",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const inputFields = [
    // {
    //   fields: [
    //     {
    //       label: "Present studying in (select)",
    //       type: "select",
    //       options: [
    //         { label: "VII", value: 7 },
    //         { label: "vIII", value: 8 },
    //         { label: "IX", value: 9 },
    //         { label: "X", value: 10 },
    //         { label: "XI", value: 11 },
    //         { label: "XII", value: 12 },
    //       ],
    //       name: "class",
    //       value: formData.class,
    //       onChange: onChange,
    //     },
    //   ],
    // },
    {
      fields: [
        {
          label: "Name of Student",
          type: "text",
          name: "name",
          value: formData.name,
          onChange: onChange,
        },
      ],
    },
    {
      fields: [
        {
          label: "Date of Birth",
          type: "date",
          name: "dob",
          value: formData.dob,
          onChange: onChange,
        },
      ],
    },
    {
      fields: [
        {
          label: "Father’s/Guadrians name",
          type: "text",
          name: "father",
          value: formData.father,
          onChange: onChange,
        },
      ],
    },
    {
      fields: [
        {
          label: " Correspondence Address",
          type: "text",
          name: "address",
          value: formData.address,
          onChange: onChange,
        },
      ],
    },

    // {
    //   fields: [
    //     {
    //       label: "City",
    //       type: "text",
    //       name: "city",
    //       value: formData.city,
    //       onChange: onChange,
    //     },
    //     {
    //       label: "State",
    //       type: "text",
    //       name: "state",
    //       value: formData.state,
    //       onChange: onChange,
    //     },
    //     {
    //       label: "Pin",
    //       type: "text",
    //       name: "pin",
    //       value: formData.pin,
    //       onChange: onChange,
    //     },
    //   ],
    // },
    {
      fields: [
        {
          label: "Email",
          type: "email",
          name: "email",
          value: formData.email,
          onChange: onChange,
        },
      ],
    },
    {
      fields: [
        {
          label: "Mobile",
          type: "tel",
          name: "mobile",
          value: formData.mobile,
          onChange: onChange,
        },
      ],
    },
  ];
  const submitForm = () => {
    RegisterUser(formData, (res) => {
      console.log(res);
      alert(res.msg);
    });
  };

  return (
    <div className="registrationFormbody">
      <div
        className="reg-two-field "
        style={{ marginTop: "20px", marginBottom: "35px" }}
      >
        <div className="input-cover-reg">
          <div className="input-label-reg">Select Field</div>
          <div className="input-box-reg">
            <select
              name="course"
              value={formData.course}
              onChange={(e) => onChange(e)}
            >
              <option>Select</option>
              <option>Engineering</option>
              <option>Medical</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg ">Currently Studying In </div>
          <div className="input-box-reg">
            <select
              name="studying"
              value={formData.studying}
              onChange={(e) => onChange(e)}
            >
              <option>Select</option>
              <option>VII</option>
              <option>VIII</option>
              <option>IX</option>
              <option>X</option>
              <option>XI</option>
              <option>XII</option>
            </select>
          </div>
        </div>
      </div>

      {inputFields.map((item, index) => {
        return (
          <div className="input-upper" style={{ marginTop: "10px" }}>
            {item.fields.map((field) => {
              return (
                <div className="input-cover-reg">
                  <div className="input-label-reg"> {field.label} </div>
                  <div className="input-box-reg">
                    <input
                      type={field.type}
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                    />{" "}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <div
        className="reg-two-field dist-city-tow "
        style={{ marginTop: "3rem" }}
      >
        <div className="input-cover-reg">
          <div className="input-label-reg dis-city">District </div>
          <div className="input-box-reg">
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg dis-city">City </div>
          <div className="input-box-reg">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg dis-city">State</div>
          <div className="input-box-reg">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg dis-city">Pin</div>
          <div className="input-box-reg">
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
      </div>
      <div className="reg-two-field" style={{ marginTop: "3rem" }}>
        <div className="input-cover-reg">
          <div className="input-label-reg">Occupation of Father </div>
          <div className="input-box-reg">
            <input
              type="text"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg">Mobile No. of (Father) </div>
          <div className="input-box-reg">
            <input
              type="tel"
              name="mobileFather"
              value={formData.mobileFather}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg">Occupation of Mother </div>
          <div className="input-box-reg">
            <input
              type="text"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg">Mobile No. (Mother) </div>
          <div className="input-box-reg">
            <input
              type="tel"
              name="motherMobile"
              value={formData.motherMobile}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
      </div>
      <div
        className="input-cover-reg"
        style={{
          marginTop: "20px",
        }}
      >
        <div
          className="input-label-reg"
          style={{ minWidth: "60%", maxWidth: "100%" }}
        >
          {" "}
          Name of the District from where the student will appear for VEGRE
        </div>
        <div className="input-box-reg">
          <input
            type="text"
            name="appearDistrict"
            value={formData.appearDistrict}
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>

      <div
        style={{ width: " 100%", display: "flex", justifyContent: "center" }}
      >
        <button className="regsubmit" onClick={submitForm}>
          {" "}
          Submit
        </button>
      </div>
      <div
        style={{ width: " 100%", display: "flex", justifyContent: "center" }}
      >
        {/* <PaymentButton /> */}
        {/* {PaymentButton()} */}
      </div>

      {/* <div>
        {amount === 0 && orderId == "" && <h1>Loading...</h1>}
        {false && (
          <div id="" onClick={showRazoryPay}>
            Proceed To Payment
          </div>
        )}
        {/* <div id="paymentbutton" onClick={showRazoryPay}></div> */}
      {/* </div> */}

      {/* <button onClick={showRazorPay2}>Pay 2</button> */}

      {/* <div className="reg-two-field">
        <div className="input-cover-reg">
          <div className="input-label-reg">Mobile No. of (Father) </div>
          <div className="input-box-reg">
            <input type="text" />{" "}
          </div>
        </div>
        <div className="input-cover-reg">
          <div className="input-label-reg">Mobile No. (Mother) </div>
          <div className="input-box-reg">
            <input
              type="text"
              name="mother"
              value={formData.value}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default RegisterNow;
