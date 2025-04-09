import React from "react";
import "./AnswerField.css";
import AnswerOption from "./AnswerOption";

const AnswerField = ({ answerOptions, answerFieldClassName }) => {
  return (
    <ul className={`answerField ${answerFieldClassName}`}>
      <AnswerOption index={0} question={answerOptions.A} />
      <AnswerOption index={1} question={answerOptions.B} />
      <AnswerOption index={2} question={answerOptions.C} />
      <AnswerOption index={3} question={answerOptions.D} />
    </ul>
  );
};
export default AnswerField;
