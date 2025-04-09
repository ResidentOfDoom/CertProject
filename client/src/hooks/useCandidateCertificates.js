import { getCandidateCertificates } from "api/certificates/getCandidateCertificates";
import { useState } from "react";
import { useEffect } from "react";
import { useUserCookie } from "./useUserCookie";

export const useCandidateCertificates = (certificateType) => {
  const [certificates, setCertificates] = useState(null);
  const { cookie } = useUserCookie();

  useEffect(() => {
    if (cookie) {
      getCandidateCertificates(certificateType, cookie).then((data) => {
        // @ts-ignore
        setCertificates(data.$values);
      });
    }
  }, [certificateType, cookie]);

  return certificates;
};
