import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useCertificate = (certificates) => {
  const [certificate, setCertificate] = useState(null);
  const { title: urlTitle } = useParams();

  useEffect(() => {
    if (!certificates) return;

    const foundCertificate = certificates.find(
      (cert) => cert.title === decodeURIComponent(urlTitle)
    );

    setCertificate(foundCertificate);
  }, [certificates, urlTitle]);

  return certificate;
};
