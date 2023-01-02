// const base_url = "http://localhost:5000";

import axios from "axios";

// const base_url = "https://vertex-education.herokuapp.com";
const base_url = "https://3wsvy1ywcj.execute-api.us-east-2.amazonaws.com";
// const base_url =
//   "http://ec2-18-179-108-89.ap-northeast-1.compute.amazonaws.com:5000";

export const RegisterUser = (payload, callBack) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(payload);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    mode: "cors",
    referrerPolicy: "unsafe-url",
    redirect: "follow",
  };

  fetch(base_url + "/user/registration", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

export const sendEnquiry = (payload, callBack) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: payload.name,
    email: payload.email,
    mobile: payload.mobile,
    message: payload.message,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    referrerPolicy: "unsafe-url",
    redirect: "follow",
  };

  fetch(base_url + "/enquiry/post", requestOptions)
    .then((response) => response.text())
    .then((result) => callBack(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};
export const sendEnquiry1 = (payload, callBack) => {
  // var axios = require('axios');
  var data = JSON.stringify({
    name: "akshay",
    email: "lakheraakshay@gmail.com",
    mobile: "8989898989",
    message: "message",
  });

  var config = {
    method: "post",
    mode: "cors",
    url: "http://ec2-18-179-108-89.ap-northeast-1.compute.amazonaws.com:5000/enquiry/post",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
