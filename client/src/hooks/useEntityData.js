import { useState, useEffect } from "react";

export const useEntityData = (fetchFunction) => {
  const [entities, setEntities] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  // Define the fetchEntities function within the useEffect to ensure it captures the latest fetchFunction
  const fetchEntities = async () => {
    try {
      const data = await fetchFunction();
      setEntities(data);

      if (data.length > 0) {
        const dynamicColumns = Object.keys(data[0]).map((key) => ({
          label: key,
        }));
        setColumns(dynamicColumns);
        setRows(data);
      }
    } catch (error) {
      console.error("Failed to fetch entities:", error);
    }
  };

  useEffect(() => {
    fetchFunction();
  }, [entities]);

  return { entities, setEntities, columns, rows, fetchEntities };
};
