import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import * as XLSX from "xlsx";
import { uploadExcel } from "./APi";

function App() {
  const [items, setItems] = useState([]);
  const [excelData, setExcelData] = useState([]);
  const [from, setfrom] = useState(null);
  const [to, setTo] = useState(null);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      // alert("sdf")
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, { type: "buffer" });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data);

        console.log(data, "<<<<<data");
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      console.log("exceldata", d);
      setExcelData(d);
      setTo(d.length - 1);

      // alert("added");
      alert("added");
      setItems(d);
    });
  };
  const submit = () => {
    if (excelData.length == 0) return alert("Please upload student excel file");
    if (from == null || to == null)
      return alert("Please enter serial number in from - to format.");
    if (from > excelData.length)
      return alert("There are total " + excelData.length + "rows");
    try {
      const filteredSheet = excelData.filter(
        (item, index) => index >= from - 1 && index <= to - 1
      );

      uploadExcel({ excelData: filteredSheet, from, to }, (res) => {
        console.log(res);
        if (res.success) {
          alert("file uploaded");
        } else {
          alert("Error while uploading");
        }
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div className="admin-upload-actions">
        <div>
          {" "}
          <input
            type="file"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={(e) => {
              const file = e.target.files[0];
              readExcel(file);
            }}
          />
        </div>
        <div className="admin-inputs">
          <input
            style={{
              width: "150px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
            value={from}
            placeholder="Enter starting sr no"
            onChange={(e) => setfrom(e.target.value)}
          />
          <input
            value={to}
            style={{ width: "150px", borderRadius: "5px" }}
            placeholder="Enter end sr. no"
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div>
          <button
            className="admin-buttons"
            onClick={(e) => {
              setfrom(1);
              setTo(excelData.length);
            }}
          >
            Complete Sheet
          </button>
        </div>
        <div>
          {" "}
          <button
            className="admin-buttons"
            style={{ background: "green", width: "150px" }}
            onClick={submit}
          >
            submit
          </button>
        </div>
      </div>

      <div
        style={{
          margin: "auto",
          border: "1px solid black",
          marginTop: "2rem",
          width: "95%",
          overflow: "scroll",
        }}
      >
        <table
          class="table container"
          style={{
            overflowX: "scroll",
            width: "100vw",
          }}
        >
          <thead>
            <tr>
              {[
                "Sl_No",
                "DATE",
                "Student_Name",
                "Father_name",
                "Course",
                "Class",
                "Student_No",
                "Father_No",
                "Mother_No",
                "District",
                "LANGUAGE",
                "APPEAR_DISTRICT",
                "DOB",
                "AADHAR_NO",
                "TEST_CENTER",
                "TEST_DATE",
                "TEST_TIME",
                "Remarks",
                "TYPE",
                "SMS",
                "Roll_No",
                "Present_Class",
                "District_Code",
              ].map((item) => {
                return (
                  <th style={{ fontSize: "13px" }} scope="col">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {items.map((d) => (
              <tr key={d.Item}>
                {[
                  "Sl_No",
                  "DATE",
                  "Student_Name",
                  "Father_name",
                  "Course",
                  "Class",
                  "Student_No",
                  "Father_No",
                  "Mother_No",
                  "District",
                  "LANGUAGE",
                  "APPEAR_DISTRICT",
                  "DOB",
                  "AADHAR_NO",
                  "TEST_CENTER",
                  "TEST_DATE",
                  "TEST_TIME",
                  "Remarks",
                  "TYPE",
                  "SMS",
                  "Roll_No",
                  "Present_Class",
                  "District_Code",
                ].map((item) => {
                  return (
                    <th style={{ fontSize: "10px" }}>{`${d[`${item}`]}`}</th>
                  );
                })}

                {/* <th>{d.APPEAR_DISTRICT}</th> */}
                {/* <td>{d.Description}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
