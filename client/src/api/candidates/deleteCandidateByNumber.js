import { instance as axios } from "api/axios";

export const deleteCandidateByNumber = (candidateNumber) => {
  const url = `Admins/${candidateNumber}`;
  axios
    .delete(url)
    .then((response) => {
      console.log(`Deleted candidate with number: ${candidateNumber}`);
    })
    .catch((error) => {
      console.error(
        `Failed to delete candidate with number: ${candidateNumber}`
      );
    });
};
