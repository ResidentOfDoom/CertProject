import { instance as axios } from "../axios";

export const getQuestions = () =>
  axios("Questions")
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching Questions:", error);
    });
