// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useUserCookie, useCertificates } from "hooks";
import {
  NavBar,
  NotFound,
  Home,
  Certificates,
  Certificate,
  Login,
  SignUp,
  Exam,
  CandidateCertificates,
  Logout,
  MyProfile,
  Admin,
} from "./components";
import CertificateStatus from "components/Certificate/CertificateStatus";

const App = () => {
  //fetched certificates
  const { cookie, handleSetCookie, handleRemoveCookie } = useUserCookie();
  const { certificates, fetchCertificates } = useCertificates();

  // extract CertificateRoutes, AuthRoutes, etc.
  return (
    <>
      <NavBar cookieValue={cookie} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Certificates"
          element={
            <Certificates
              certificates={certificates}
              cookieValue={cookie}
              fetchCertificates={fetchCertificates}
            />
          }
        />
        <Route
          path="/Certificate/:title"
          element={
            <Certificate certificates={certificates} cookieValue={cookie} />
          }
        />
        <Route
          path="/Login"
          element={<Login handleSetCookie={handleSetCookie} />}
        />
        <Route
          path="/SignUp"
          element={<SignUp handleSetCookie={handleSetCookie} />}
        />
        <Route
          path="/MyProfile"
          element={
            cookie ? <MyProfile /> : <Login handleSetCookie={handleSetCookie} />
          }
        />

        <Route
          path="/Logout"
          element={<Logout handleRemoveCookie={handleRemoveCookie} />}
        />
        <Route path="/Exam/:id" element={<Exam />} />
        <Route
          path="/Admin"
          element={
            cookie ? (
              <Admin
                certificates={certificates}
                cookieValue={cookie}
                fetchCertificates={fetchCertificates}
              />
            ) : (
              <NotFound />
            )
          }
        />

        <Route path="/MyCertificates" element={<CandidateCertificates />} />

        <Route
          path="/CertificateStatus"
          element={<CertificateStatus />}
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
