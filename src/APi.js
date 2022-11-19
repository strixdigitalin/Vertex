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

    fetch("http://localhost:5000/excel/upload", requestOptions)
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

export const fetchAdmitCardDetails = (formData, callBack) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "http://localhost:5000/excel/get?Student_No=" + formData.Student_No,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const data = JSON.parse(result);
      callBack(data);
    })
    .catch((error) => console.log("error", error));
};
