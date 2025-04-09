import { instance as axios } from "../axios";

export const getQuestionsForExam = ({ Title }) =>
  axios
    .get(`Questions/Exam/${Title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Error fetching Questions/Exam/${Title}:`, error);
    });
