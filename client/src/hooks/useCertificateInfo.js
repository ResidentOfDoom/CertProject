import { useEffect, useState } from "react";

export const useCertificateInfo = (certificate) => {
  const [certTitle, setCertTitle] = useState(null);

  useEffect(() => {
    if (certificate) {
      setCertTitle(certificate.title);
    }
  }, [certificate]);
  return certTitle;
};
