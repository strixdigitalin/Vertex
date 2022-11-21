import React, { useState, useEffect } from "react";
import axios from "axios";

import PaymentButton from "./PaymentButton";
import { base_URL, getOrder } from "./Payment/APi/ORders";
import { RegisterUser } from "./Payment/APi/Users";
import { allDistrict } from "./District";

function RegisterNow() {
  const [formData, setFormData] = useState({
    field: null,
    studying: null,
    name: null,
    dob: null,
    father: null,
    address: null,
    email: null,
    mobile: Number,
    district: null,
    city: null,
    pin: null,
    state: null,
    fatherOccupation: null,
    mobileFather: null,
    motherOccupation: null,
    motherMobile: null,
    appearDistrict: null,
    gender: null,
    mother: null,
    category: null,
    school: null,
    board: null,
    aadhar: null,
  });
  const fieldOptions = [
    {
      field: "field",
      show: "Field",
    },
    {
      field: "school",
      show: "School Name",
    },
    {
      field: "board",
      show: "Board Name",
    },
    {
      field: "aadhar",
      show: "Aadhar Number",
    },
    {
      field: "category",
      show: "Category",
    },
    {
      field: "mother",
      show: "Mother's Name",
    },
    { field: "studying", show: "Current Studying Class" },
    { field: "gender", show: "Gender" },
    { field: "name", show: "Name" },
    { field: "dob", show: "Date of birth" },
    { field: "father", show: "Father's Name" },
    { field: "address", show: "Address" },

    { field: "district", show: "District" },
    { field: "city", show: "City" },
    { field: "pin", show: "Pin Code" },
    { field: "state", show: "State" },
    { field: "email", show: "Email" },
    { field: "mobile", show: "Mobile" },
    { field: "fatherOccupation", show: "Father Occupation" },
    { field: "motherOccupation", show: "Mother Occupation" },
    { field: "mobileFather", show: "Father's Mobile Number" },
    { field: "motherMobile", show: "Mother's Mobile Number" },
    { field: "appearDistrict", show: "Appeaed District for Exam" },
  ];

  const [showBuy, setShowBuy] = useState(true);

  // Paymet
  const [values, setValues] = useState({
    amount: 0,
    orderId: "",
    error: "",
    success: false,
  });

  const { amount, orderId, success, error } = values;
  const [stateOther, setStateOther] = useState(false);
  const [districtOther, setDistrictOther] = useState(false);
  const [appearDistrictShow, setAppearDistrictShow] = useState(false);
  const [boardOther, setBoardOther] = useState(false);
  useEffect(() => {
    // createOrder();
    // window.location.href = "/payment-success/" + 5;
  }, []);

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
      "data-key": "rzp_live_XVo1ue3IK3yAAY",
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

  // const showRazoryPay = () => {
  //   const form = document.createElement("form");
  //   form.setAttribute("action", `http://localhost:5000/api/payment/callback`);
  //   form.setAttribute("method", "POST");
  //   const script = document.createElement("script");
  //   script.src = "https://checkout.razorpay.com/v1/checkout.js";
  //   script.setAttribute("data-key", "rzp_live_XVo1ue3IK3yAAY");
  //   script.setAttribute("data-amount", amount);
  //   script.setAttribute("data-name", "Clever Coder");
  //   script.setAttribute("data-prefill.contact", "9678452132");
  //   script.setAttribute("data-prefill.email", "abc@gmail.com");
  //   script.setAttribute("data-order_id", orderId);
  //   script.setAttribute("data-prefill.name", "Lalit Patel");
  //   // script.setAttribute("data-image", `http://localhost:5000/logo`);
  //   script.setAttribute("data-buttontext", "Proceed To Payment");
  //   let paymentbutton = document.getElementById("paymentbutton");
  //   paymentbutton.appendChild(form);
  //   form.appendChild(script);
  //   const input = document.createElement("input");
  //   input.type = "hidden";
  //   input.custom = "Hidden Element";
  //   input.name = "hidden";
  //   form.appendChild(input);
  //   setShowBuy(false);
  // };

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

  async function showRazorPay2(userId) {
    console.log("updating the user with id--->>>>", userId);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.get(base_URL + "/api/createorder/" + userId);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }
    console.log(result, "<<<result");

    // Getting the order details back

    const { amount, id, currency } = result.data;
    // const liveKey = "rzp_live_rWC4iXaB2ed5LL"; // old live key
    const testKey = "rzp_test_Mu5DUXrPHI2u7b"; // old test key

    const liveKey = "rzp_live_XVo1ue3IK3yAAY"; // new live key

    const options = {
      // key: "rzp_live_XVo1ue3IK3yAAY", // Enter the Key ID generated from the Dashboard
      key: liveKey, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Vertex Education",
      description: "Coaching Institue for (IIT / Medical students)",
      // image: { logo },
      order_id: id,

      handler: async function (response) {
        const data = {
          orderCreationId: id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
          userId: userId,
        };
        console.log(data);

        // 0000

        const result = await axios.post(
          base_URL + "/api/payment/callback",
          data
        );
        console.log(result);

        alert(result.data.msg);
        const { razorpayPaymentId, razorpayOrderId, time } = result.data.data;
        // window.location.href =
        //   "/payment-success/" +
        //   "745896" +
        //   "/" +
        //   "456987465" +
        //   "/" +
        //   "745874" +
        //   "/" +
        //   "Mon Nov 21 2022 22:32:42 GMT+0530 (India Standard Time)" +
        //   "/50" +
        //   "/name" +
        //   "/4558";
        window.location.href =
          "/payment-success/" +
          id +
          "/" +
          razorpayPaymentId +
          "/" +
          razorpayOrderId +
          "/" +
          time +
          "/" +
          amount.toString() +
          "/" +
          formData.name +
          "/" +
          formData.dob;
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.mobile,
      },
      notes: {
        address: formData.address,
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  // const openStripe = async () => {
  //   await loadScript("https://checkout.stripe.com/v2/checkout.js");
  // };

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
    // {
    //   fields: [
    //     {
    //       label: "Gender",
    //       type: "text",
    //       name: "gender",
    //       value: formData.gender,
    //       onChange: onChange,
    //     },
    //   ],
    // },
    {
      fields: [
        {
          label: "Father’s/Guardians name",
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
          label: "Mother's Name",
          type: "text",
          name: "mother",
          value: formData.mother,
          onChange: onChange,
        },
      ],
    },
    // {
    //   fields: [
    //     {
    //       label: " Correspondence Address",
    //       type: "text",
    //       name: "address",
    //       value: formData.address,
    //       onChange: onChange,
    //     },
    //   ],
    // },

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
          type: "number",
          name: "mobile",
          value: formData.mobile,
          onChange: onChange,
        },
      ],
    },
    {
      fields: [
        {
          label: "Aadhar Number",
          type: "number",
          name: "aadhar",
          value: formData.aadhar,
          onChange: onChange,
        },
      ],
    },
  ];
  const submitForm = async () => {
    // alert("df");
    const showAlertField = (field) => {
      console.log(field);
      let findField = fieldOptions.filter((item) => item.field == field);
      console.log(findField, "<<<<");
      return findField[0].show;
    };
    if (formData.aadhar.length != 12) {
      alert("Aadhar number is invalid");
      return null;
    }
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    // console.log(regex.test(formData.email));
    if (!regex.test(formData.email)) {
      alert("invalid email address !");
      return null;
    }
    const payloadArr = Object.keys(formData);
    let flag = 0;

    for (let index = 0; index < payloadArr.length; index++) {
      // const element = payloadArr[index];
      if (formData[payloadArr[index]] == null) {
        alert(`${showAlertField(payloadArr[index])} is required`);
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      const { data } = await axios.post(
        base_URL + "/user/registration",
        // "http://localhost:5000" + "/user/registration",
        formData
      );
      console.log(data.data, "<<<<register user");
      if (data.status == "success") {
        showRazorPay2(data.data._id);
      }
      return null;

      // RegisterUser(formData, (res) => {
      //   console.log(res);
      //   alert(res.msg);
      // });
    }
  };

  return (
    <>
      <div className="successFulModal">
        <div className="paymentData"></div>
      </div>
      <div className="registrationFormbody">
        <div
          className="reg-two-field "
          style={{ marginTop: "20px", marginBottom: "35px" }}
        >
          <div className="input-cover-reg">
            <div className="input-label-reg">Select Field</div>
            <div className="input-box-reg">
              <select
                name="field"
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
        {/*  */}
        <div className="input-cover-reg" style={{ marginTop: "10px" }}>
          <div className="input-label-reg"> Gender </div>
          <div className="input-box-reg">
            <select name="gender" onChange={onChange}>
              <option value={null}>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="input-cover-reg" style={{ marginTop: "10px" }}>
          <div className="input-label-reg"> Category </div>
          <div className="input-box-reg">
            <select name="category" onChange={onChange}>
              <option value={null}>Select</option>
              <option value="GENERAL">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              {/* <option value="OTHER">OTHER</option> */}
            </select>
          </div>
        </div>
        {/*  */}
        <div className="input-cover-reg" style={{ marginTop: "20px" }}>
          <div className="input-label-reg"> Address </div>
          <div className="input-box-reg">
            <textarea
              style={{ width: "100%", minWidth: "300px" }}
              type="text"
              name="address"
              value={formData.address}
              onChange={onChange}
            />{" "}
          </div>
        </div>
        <div
          className="reg-two-field dist-city-tow "
          style={{ marginTop: "3rem" }}
        >
          <div className="input-cover-reg">
            <div className="input-label-reg dis-city">State</div>
            <div className="input-box-reg">
              <select
                name="state"
                onChange={(e) => {
                  onChange(e);
                  if (e.target.value == "Other") setStateOther(true);
                  else setStateOther(false);
                }}
              >
                <option value="null">Select</option>
                <option
                  name="state"
                  value="Bihar"
                  // onChange={(e) => onChange(e)}
                >
                  Bihar
                </option>
                <option
                  name="state"
                  value="Jharkhand"
                  // onChange={(e) => onChange(e)}
                >
                  Jharkhand
                </option>
                <option
                  name="state"
                  value="West Bengal"
                  // onChange={(e) => onChange(e)}
                >
                  West Bengal
                </option>
                <option
                  name="state"
                  value="Uttar Pradesh"
                  // onChange={(e) => onChange(e)}
                >
                  Uttar Pradesh
                </option>
                <option
                  name="state"
                  value="Other"
                  // onChange={(e) => onChange(e)}
                >
                  Other
                </option>
              </select>
              {stateOther && (
                <input
                  style={{ marginTop: "1rem" }}
                  type="text"
                  name="state"
                  placeholder="Enter State name"
                  // value={formData.state}
                  onChange={(e) => onChange(e)}
                />
              )}{" "}
            </div>
          </div>
          <div className="input-cover-reg">
            <div className="input-label-reg dis-city">District </div>
            <div className="input-box-reg">
              <select
                name="district"
                style={{ width: "195px" }}
                value={formData.district}
                onChange={(e) => {
                  onChange(e);
                  if (e.target.value == "Other") setDistrictOther(true);
                  else setDistrictOther(false);
                }}
              >
                <option>Select</option>
                {allDistrict.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
                <option value="Other">Other</option>
              </select>
              {districtOther && (
                <input
                  placeholder="Enter District Name"
                  type="text"
                  name="district"
                  // value={formData.district}
                  onChange={(e) => onChange(e)}
                />
              )}
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
            <div className="input-label-reg dis-city">Pin</div>
            <div className="input-box-reg">
              <input
                type="number"
                name="pin"
                value={formData.pin}
                onChange={(e) => onChange(e)}
              />{" "}
            </div>
          </div>
        </div>
        <div className="reg-two-field" style={{ marginTop: "3rem" }}>
          <div className="input-cover-reg">
            <div className="input-label-reg">Medium of Exam</div>
            <div className="input-box-reg">
              <select
                name="medium"
                onChange={(e) => {
                  onChange(e);
                }}
              >
                <option value="null">Select</option>
                <option
                  name="medium"
                  value="English"
                  // onChange={(e) => onChange(e)}
                >
                  English
                </option>
                <option
                  name="medium"
                  value="Hindi"
                  // onChange={(e) => onChange(e)}
                >
                  Hindi
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="reg-two-field" style={{ marginTop: "3rem" }}>
          <div className="input-cover-reg">
            <div className="input-label-reg">Name of School</div>
            <div className="input-box-reg">
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={(e) => onChange(e)}
              />{" "}
            </div>
          </div>
          <div className="input-cover-reg">
            <div className="input-label-reg">Board Name</div>
            <div className="input-box-reg">
              <select
                name="board"
                onChange={(e) => {
                  onChange(e);
                  if (e.target.value == "Other") setBoardOther(true);
                  else setBoardOther(false);
                }}
              >
                <option value="null">Select</option>
                <option
                  name="board"
                  value="CBSE"
                  // onChange={(e) => onChange(e)}
                >
                  CBSE
                </option>
                <option
                  name="board"
                  value="ICSE"
                  // onChange={(e) => onChange(e)}
                >
                  ICSE
                </option>
                <option
                  name="board"
                  value="BSEB"
                  // onChange={(e) => onChange(e)}
                >
                  BSEB
                </option>
                <option
                  name="board"
                  value="Other"
                  // onChange={(e) => onChange(e)}
                >
                  Other
                </option>
              </select>
              {boardOther && (
                <input
                  style={{ marginTop: "1rem" }}
                  type="text"
                  name="board"
                  placeholder="Enter Board name"
                  // value={formData.state}
                  onChange={(e) => onChange(e)}
                />
              )}
            </div>
          </div>
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
            <div className="input-label-reg">Mobile No. (Father) </div>
            <div className="input-box-reg">
              <input
                type="number"
                name="mobileFather"
                placeholder="10 digit mobile number"
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
                type="number"
                maxlength={10}
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
            <select
              name="appearDistrict"
              style={{ width: "195px" }}
              value={formData.appearDistrict}
              onChange={(e) => {
                onChange(e);
                if (e.target.value == "Other") setAppearDistrictShow(true);
                else setAppearDistrictShow(false);
              }}
            >
              <option>Select</option>
              {allDistrict.map((item) => {
                return <option value={item}>{item}</option>;
              })}
              <option value="Other">Other</option>
            </select>
            {appearDistrictShow && (
              <input
                type="text"
                name="appearDistrict"
                placeholder="Enter District Name"
                // value={formData.appearDistrict}
                onChange={(e) => onChange(e)}
              />
            )}
          </div>
        </div>
        <div
          style={{ width: " 100%", display: "flex", justifyContent: "center" }}
        >
          <button className="regsubmit" onClick={submitForm}>
            {" "}
            Pay (200) and Submit
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
    </>
  );
}

export default RegisterNow;
