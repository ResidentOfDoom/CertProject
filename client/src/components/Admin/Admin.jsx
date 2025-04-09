import { createCertificate } from "api/certificates/createCertificate";
import { AddCertificateModal } from "components/Certificates/AddCertificateModal";
import CertificatesList from "components/Certificates/Certificates";
import { useModal } from "hooks/useModal";
import React, { useState } from "react";
import ManageCandidates from "./ManageCandidates";
import ManageExams from "./ManageExams";
import ManageQuestions from "./ManageQuestions";

/**
 * Admins role over candidates
 * 1) Create Candidate
 * 2) Delete Candidate
 * 3) Update Candidate
 * 4) Get All Candidates
 * 5) See Obtained/Unobtained/Available Certificates of a certain candidate
 * 6) Add a Candidate Certificate
 *
 *
 * 11) Create exams
 * 12) Update Exams
 * 13) Delete exams
 * 14) Get exams
 *
 * 15) CRUD Questions
 *
 *
 *
 * Update certificate -> if Value = " " then the value stays as it previously was
 */

const Admin = (props) => {
  const { certificates, cookieValue, fetchCertificates } = props;

  const [selectedOption, setSelectedOption] = useState(null);

  //Should this have higher-level names?
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const createAndFetchCertificate = async (certificateData) => {
    await createCertificate(certificateData);
    fetchCertificates();
  };

  const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="menu">
        <button onClick={() => handleSelectionChange("candidates")}>
          Manage Candidates
        </button>
        <button onClick={() => handleSelectionChange("certificates")}>
          Manage Certificates
        </button>
        <button onClick={() => handleSelectionChange("exams")}>
          Manage Exams
        </button>
        <button onClick={() => handleSelectionChange("questions")}>
          Manage Questions
        </button>
      </div>

      {selectedOption === "candidates" && <ManageCandidates />}
      {selectedOption === "certificates" && (
        <>
          <div className="add-certificate">
            <button onClick={handleOpenModal}>Add Certificate</button>
          </div>
          <CertificatesList
            certificates={certificates}
            cookieValue={cookieValue}
            isAdminView
            fetchCertificates={fetchCertificates}
          />
          <AddCertificateModal
            open={isModalOpen}
            onClose={handleCloseModal}
            onSave={createAndFetchCertificate}
          />
        </>
      )}
      {selectedOption === "exams" && <ManageExams />}
      {selectedOption === "questions" && <ManageQuestions />}
    </>
  );
};

export default Admin;
