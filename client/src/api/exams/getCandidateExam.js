import { instance as axios } from "../axios";

export const getCandidateExam = ({ Title, CandidateNumber }) =>
  axios
    .get(`CandidadateExams/${CandidateNumber}/Exam/${Title}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(
        `Error fetching CandidadateExams/${CandidateNumber}/Exam/${Title}:`,
        error
      );
    });
