import React, { useState, useEffect } from "react";
import "./Certificate.css";
import {
  useCandidateCertificates,
  useCertificate,
  useUserCookie,
} from "../../hooks";
import { useCandidateInfo } from "hooks/useCandidateInfo";
import { useCertificateInfo } from "hooks/useCertificateInfo";
import { buyCertificate } from "api/certificates/buyCertificate";
import { Link } from "react-router-dom";

const CertificateDetails = ({ certificates, cookieValue }) => {
  const certificate = useCertificate(certificates);
  const candNum = useCandidateInfo(cookieValue);
  const certTitle = useCertificateInfo(certificate);
  // @ts-ignore

  // This is a hard one to make custom hook

  const [isBought, setIsBought] = useState(false);
  const availableCertificates = useCandidateCertificates("available");

  useEffect(() => {
    if (
      availableCertificates &&
      Array.isArray(availableCertificates) &&
      certificate
    ) {
      const isCertificateAvailable = availableCertificates.some(
        (cert) => cert.title === certificate.title
      );
      setIsBought(!isCertificateAvailable);
    }
  }, [availableCertificates, certificate]);

  const handleBuy = async () => {
    await buyCertificate({
      candidateNumber: candNum,
      title: certTitle,
    });
    setIsBought(true);
  };

  const { cookie } = useUserCookie();
  //Custom hook should return cookie, isBought, handleBuy
  //Should have as arguments cookieValue

  return (
    certificate && (
      <div className="Certificate-Details-Container">
        <div className="Certificate-Details-Title">
          <h1>{certificate.title}</h1>
        </div>
        <img
          className="Certificate-Logo"
          src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
          alt="Certificate"
        />
        <div className="Certificate-Details-Description">
          <h1>{certificate.description}</h1>
        </div>

        {cookie == null && !isBought && (
          <Link to="/Login">
            <button className="Purchase-Certificate">Buy now</button>
          </Link>
        )}

        {cookie && !isBought && (
          <button className="Purchase-Certificate" onClick={handleBuy}>
            Buy Now
          </button>
        )}

        {cookie && isBought && (
          <button className="Purchased-Certificate">Bought</button>
        )}
      </div>
    )
  );
};

export default CertificateDetails;
