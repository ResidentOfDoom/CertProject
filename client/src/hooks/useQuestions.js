import { getQuestions } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches questions, sets state, and returns it
 */
export const useQuestions = () => {
  const [questions, setQuestions] = useState(null);
  const fetchQuestions = () => {
    getQuestions().then((data) => {
      const questionsWithoutId = data.$values.map(
        ({ $id, exam, ...rest }) => rest
      ); // Exclude $id, exam from data
      setQuestions(questionsWithoutId);
    });
  };

  useEffect(() => {
    fetchQuestions();
  }, []); // Empty dependency array to run only once

  return { questions, fetchQuestions };
};
