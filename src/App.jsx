import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from "./Home";
import Eligiblity from "./Eligiblity";
import Syllabus from "./Syllabus";
import SamplePaper from "./SamplePaper";
import Zone from "./Zone";
import WhyVegre from "./Whyvegre";
import TestCenter from "./TestCenter";
import Procedure from "./Procedure";
import News from "./News";
import Terms from "./Terms";
import Courses from "./Courses";
import Rewards from "./Rewards";
import AdmitCard from "./AdmitCard";
import { useState } from "react";
import RegisterNow from "./RegisterNow";
import PaymentButton from "./PaymentButton";
import PaymentTerms from "./PaymentTerms";
import PaymentPrivacy from "./PaymentPrivacy";
import PaymentRefund from "./PaymentRefund";
import ContactUs from "./ContactUs";

const App = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar flag={flag} />
        <Routes>
          <Route path="/" element={<Home setFlag={setFlag} flag={flag} />} />
          <Route
            path="/eligiblity"
            element={<Eligiblity setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/syllabus/:id"
            element={<Syllabus setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/sample-paper"
            element={<SamplePaper setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/zones"
            element={<Zone setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/test-centers"
            element={<Zone setFlag={setFlag} flag={flag} />}
            // element={<TestCenter setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/procedure"
            element={<Procedure setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/news"
            element={<News setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/terms"
            element={<Terms setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/payment-terms"
            element={<PaymentTerms setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/privacy-policy-payment"
            element={<PaymentPrivacy setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/refund-collection"
            element={<PaymentRefund setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/contact-us"
            element={<ContactUs setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/courses/:id"
            element={<Courses setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/rewards"
            element={<Rewards setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/why-vegre"
            element={<WhyVegre setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/admit-card"
            element={<AdmitCard setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/register-now"
            element={<RegisterNow setFlag={setFlag} flag={flag} />}
          />
          <Route
            path="/Payment"
            element={<PaymentButton setFlag={setFlag} flag={flag} />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
