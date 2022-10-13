import React, { useState } from "react";

function RegisterNow() {
  const [formData, setFormData] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log("label-->", name, "\t value-->", value);
    setFormData({ ...formData, [name]: value });
  };

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
          name: "date",
          value: formData.date,
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
    {
      fields: [
        {
          label: "District",
          type: "text",
          name: "district",
          value: formData.district,
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
        <button className="regsubmit"> Submit</button>
      </div>
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
