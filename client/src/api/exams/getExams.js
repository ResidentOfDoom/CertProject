import { instance as axios } from "../axios";

export const getExams = () =>
  axios("Exams")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching Exams:", error);
    });
