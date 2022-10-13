export const base_URL = "http://localhost:5000/api";
export const getOrder = (callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:5000/api/createorder", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      //   console.log(result);
      callBack(JSON.parse(result));
    })
    .catch((error) => console.log("error", error));
};

// export const getOrder = (callBack) => {
//   return fetch(`${base_URL}/createorder`, {
//     method: "GET",
//   })
//     .then((response) => callBack(response))
//     .catch((err) => console.log(err));
// };

export const grabStatus = (paymentId) => {
  return fetch(`${base_URL}/payments/${paymentId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
