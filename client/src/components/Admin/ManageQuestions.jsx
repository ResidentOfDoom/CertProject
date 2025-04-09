import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { useQuestions } from "hooks/useQuestions";

const ManageQuestions = () => {
  const [rows, setRows] = useState([]); // Initiate Rows as Empty Array
  const [columns, setColumns] = useState([]); // Initiate Columns as Empty Array
  const { questions, fetchQuestions } = useQuestions(); // Deconstruct questions and fetchQuestions

  useEffect(() => {
    try {
      fetchQuestions(); // Fetch
      const dynamicColumns = // Make Keys from Dictionary questions as Columns
        Object.keys(questions[0]).map((key) => ({ label: key }));
      setColumns(dynamicColumns); // Set Columns
      setRows(questions); // Set Rows
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  }, [questions]);

  const handleAdd = () => {
    // Not implemented yet
  };

  const handleUpdate = () => {
    // Not implemented yet
  };

  const handleDelete = () => {
    // Not implemented yet
  };

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      identifierField={undefined}
    />
  );
};

export default ManageQuestions;
