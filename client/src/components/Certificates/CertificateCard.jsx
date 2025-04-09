import React from "react";
import { Link } from "react-router-dom";
import UpdateCertificateModal from "./UpdateCertificateModal";
import { deleteCertificate } from "api/certificates/deleteCertificate";
import { updateCertificateByTitle } from "api/certificates/updateCertificateByTitle";
import { useModal } from "hooks/useModal";

const CertificateCard = ({
  src,
  title,
  price,
  id,
  cookieValue,
  isAdminView,
  certificates,
  fetchCertificates,
}) => {
  // CandidateNumber returns 0 if user is an Admin, and something >0 in every other case
  const cookie = cookieValue;

  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleDelete = () => {
    const certificate = certificates.find((c) => c.$id === id);
    if (!certificate) {
      console.error("Certificate not found");
      return;
    }

    deleteCertificate(certificate).then(() => fetchCertificates());
  };

  const handleUpdate = async (updatedData) => {
    await updateCertificateByTitle({ title }, updatedData);
    fetchCertificates();
    handleCloseModal();
  };

  return (
    <>
      <Link
        to={isAdminView ? "./" : `/Certificate/${encodeURIComponent(title)}`}
        style={{ textDecoration: "none" }}
        className="certificate-link"
      >
        <article>
          <img
            src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
            alt="Certificate"
          />
          <h4 className="certificate-title">{title}</h4>
          <h4>{price} €</h4>
          {!cookie?.candidateNumber && isAdminView && (
            <div className="action-buttons">
              <button
                className="action-button update"
                onClick={handleOpenModal}
              >
                &#9998; Update
              </button>{" "}
              <button className="action-button delete" onClick={handleDelete}>
                &#128465; Delete
              </button>
            </div>
          )}
        </article>
      </Link>
      <UpdateCertificateModal
        open={isModalOpen}
        onClose={handleCloseModal}
        certificate={{ title, price, id }}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default CertificateCard;
