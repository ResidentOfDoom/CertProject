import { getCandidatesOfCertainCertificate } from "api/candidates/getCandidatesOfCertainCertificate";
import CustomTable from "components/Admin/CustomTable";
///Certificate/:title/Status
const { default: React, useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");

const CertificateStatus = () => {
  const [candidates, setCandidates] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const fetchCandidates = async () => {
    try {
      const data = await getCandidatesOfCertainCertificate("pipi");
      setCandidates(data);
      console.log(data);

      // ... [rest of your logic for setting columns and rows]
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    }
  };
  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <>hello</>
    // <CustomTable
    //   columns={undefined}
    //   rows={undefined}
    //   handleAdd={undefined}
    //   handleDelete={undefined}
    //   handleUpdate={undefined}
    //   identifierField={undefined}
    // ></CustomTable>
  );
};

export default CertificateStatus;
