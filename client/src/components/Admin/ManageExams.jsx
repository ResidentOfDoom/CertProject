import { useExams } from "hooks/useExams";
import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";

const ManageExams = () => {
  const [rows, setRows] = useState([]); // Initiate Rows as Empty Array
  const [columns, setColumns] = useState([]); // Initiate Columns as Empty Array
  const { exams, fetchExams } = useExams(); // Deconstruct exams and fetchExams

  useEffect(() => {
    try {
      fetchExams(); // Fetch
      const dynamicColumns = // Make Keys from Dictionary Exams as Columns
        Object.keys(exams[0]).map((key) => ({ label: key }));
      setColumns(dynamicColumns); // Set Columns
      setRows(exams); // Set Rows
    } catch (error) {
      console.error("Failed to fetch exams:", error);
    }
  }, [exams]);

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

export default ManageExams;
