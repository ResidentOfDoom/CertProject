// src/components/Home/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  // const [url, setUrl] = useState("http://localhost:3000/");
  // const [data, setData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // const redirectOnCertificates = (e) => {
  //     e.preventDefault();
  //     setUrl("http://localhost:3000/Certificates")
  // };

  return (
    <>
      {/* <Routes>
                <Route path="/" element={<Certificates/>}/>
            </Routes> */}
      {isLoggedIn && (
        <>
          <h1>Welcome back, candidate!</h1>
          <div>
            <h3>Resume you Certificates</h3>
            <li>
              <Link to="/Certificate/1">cert1</Link>
            </li>
            <li>
              <Link to="/Certificate/2">cert2</Link>
            </li>
            <li>
              <Link to="/Certificate/3">cert3</Link>
            </li>
            <Link to="/Certificates">
              See all your Incompleted Certificates
            </Link>
          </div>
        </>
      )}

      <div>
        <h3>Most Common Certificates</h3>
        <li>
          <Link to="/Certificate/1">cert1</Link>
        </li>
        <li>
          <Link to="/Certificate/2">cert2</Link>
        </li>
        <li>
          <Link to="/Certificate/3">cert3</Link>
        </li>
        <Link to="/Certificates">See more Certificates</Link>
      </div>
      <div>
        <h3>Recommended Certificates</h3>
        <li>
          <Link to="/Certificate/1">cert1</Link>
        </li>
        <li>
          <Link to="/Certificate/2">cert2</Link>
        </li>
        <li>
          <Link to="/Certificate/3">cert3</Link>
        </li>
        <Link to="/Certificates">See more Certificates</Link>
      </div>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
    </>
  );
}
