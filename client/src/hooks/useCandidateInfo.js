import { useEffect, useState } from "react";

export const useCandidateInfo = (cookieValue) => {
  const [candNum, setCandNum] = useState(null);
  useEffect(() => {
    if (cookieValue) {
      setCandNum(cookieValue.candidateNumber);
    }
  }, [cookieValue]);
  return candNum;
};
