import { getSpecificExam } from "../api";
import { getQuestionsForExam } from "../api";
import { getCandidateExam } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches specificExam, sets state, and returns it
 */
const useSpecificExam = ({ Title }) => {
  const [specificExam, setSpecificExam] = useState(null);
  const fetchSpecificExam = () => {
    getSpecificExam({ Title }).then((data) => {
      const specificExamWithoutId = data.$values.map(
        ({ $id, questions, certificate, ...rest }) => rest
      ); // Exclude $id, questions, certificate from data
      setSpecificExam(specificExamWithoutId);
    });
  };

  useEffect(() => {
    fetchSpecificExam();
  }, []); // Empty dependency array to run only once

  return { specificExam, fetchSpecificExam };
};

/**
 * Fetches questionsForExam, sets state, and returns it
 */
const useQuestionsForExam = ({ Title }) => {
  const [questionsForExam, setQuestionsForExam] = useState(null);
  const fetchQuestionsForExam = () => {
    getQuestionsForExam({ Title }).then((data) => {
      const QuestionsForExamWithoutId = data.$values.map(
        ({ $id, exam, ...rest }) => rest
      ); // Exclude $id, exam from data
      setQuestionsForExam(QuestionsForExamWithoutId);
    });
  };

  useEffect(() => {
    fetchQuestionsForExam();
  }, []); // Empty dependency array to run only once

  return { questionsForExam, fetchQuestionsForExam };
};

/**
 * Fetches CandidateExam, sets state, and returns it
 */
const useCandidateExam = ({ Title, CandidateNumber }) => {
  const [candidateExam, setCandidateExam] = useState(null);
  const fetchCandidateExam = () => {
    getCandidateExam({ Title, CandidateNumber }).then((data) => {
      const candidateExamWithoutId = data.$values.map(
        ({ $id, ...rest }) => rest
      ); // Exclude $id, exam from data
      setCandidateExam(candidateExamWithoutId);
    });
  };

  useEffect(() => {
    fetchCandidateExam();
  }, []); // Empty dependency array to run only once

  return { candidateExam, fetchCandidateExam };
};

export const useExam = () => {
  return { useSpecificExam, useQuestionsForExam, useCandidateExam };
};
