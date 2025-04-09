import { useState } from "react";

export const useCertificateProperties = () => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [price, setPrice] = useState(null);

  return {
    title,
    setTitle,
    description,
    setDescription,
    imageSrc,
    setImageSrc,
    price,
    setPrice,
  };
};
