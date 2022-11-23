import axios from "axios";
import { base_URL } from "./Payment/APi/ORders";

export const uploadExcel = async (payload, callBack) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      excelData: payload.excelData,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(base_URL + "/excel/upload", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result, "<<<<result");
        callBack(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
  } catch (e) {
    console.log(e);
  }
};

export const fetchAdmitCardDetails = async (formData, callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const { data } = await axios.get(base_URL + "/excel/get", {
    params: formData,
  });
  callBack(data);

  // fetch(base_URL + "/excel/get" + { params: formData }, requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => {
  //     const data = JSON.parse(result);
  //     callBack(data);
  //   })
  //   .catch((error) => console.log("error", error));
};
