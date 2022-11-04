// const base_url = "http://localhost:5000";
const base_url = "https://vertex-education.herokuapp.com";

export const RegisterUser = (payload, callBack) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(payload);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
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
    redirect: "follow",
  };

  fetch(base_url + "/enquiry/post", requestOptions)
    .then((response) => response.text())
    .then((result) => callBack(JSON.parse(result)))
    .catch((error) => console.log("error", error));
};
