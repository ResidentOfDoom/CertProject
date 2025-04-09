import { buyCertificate } from "api/certificates/buyCertificate";

export const handleBuy = async (jsonPayload) => {
  await buyCertificate(jsonPayload); 
};
